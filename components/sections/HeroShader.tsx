"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform float uInfluence;
  varying vec2 vUv;

  void main() {
    float fade = smoothstep(0.0, 0.34, vUv.y);
    vec2 pixel = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
    vec2 pointerPixel = vec2(uPointer.x, 1.0 - uPointer.y) * uResolution;
    vec2 gridPosition = pixel / 32.0;
    vec2 gridDistance = min(fract(gridPosition), 1.0 - fract(gridPosition));
    float gridX = 1.0 - smoothstep(0.015, 0.045, gridDistance.x);
    float gridY = 1.0 - smoothstep(0.015, 0.045, gridDistance.y);
    float grid = max(gridX, gridY);
    vec2 cell = floor(gridPosition);
    vec2 hoveredCell = floor(pointerPixel / 32.0);
    float activeCell = 1.0 - step(0.5, abs(cell.x - hoveredCell.x) + abs(cell.y - hoveredCell.y));
    activeCell *= uInfluence;
    vec3 paper = vec3(0.98, 0.99, 0.985);
    vec3 brandBlue = vec3(0.0, 0.235294, 0.447059);
    vec3 color = mix(paper, brandBlue, activeCell);
    float alpha = fade * max(grid * 0.12, activeCell);
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function HeroShader() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
    camera.position.z = 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0xffffff, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const background = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: {
          uResolution: { value: new THREE.Vector2(1, 1) },
          uPointer: { value: new THREE.Vector2(0.5, 0.5) },
          uInfluence: { value: 0 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
      }),
    );
    scene.add(background);

    const material = background.material as THREE.ShaderMaterial;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const pointer = new THREE.Vector2(0.5, 0.5);
    const pointerTarget = new THREE.Vector2(0.5, 0.5);
    let influence = 0;
    let influenceTarget = 0;
    const hero = host.parentElement;
    const panorama = hero?.querySelector<HTMLElement>(".hero-panorama");

    const resize = () => {
      const { width } = hero?.getBoundingClientRect() ?? host.getBoundingClientRect();
      const height = panorama?.offsetTop ?? hero?.clientHeight ?? 1;
      host.style.height = `${height}px`;
      renderer.setSize(width, height, false);
      material.uniforms.uResolution.value.set(width, Math.max(height, 1));
      renderer.render(scene, camera);
    };

    const animatePointer = () => {
      pointer.lerp(pointerTarget, 0.12);
      influence += (influenceTarget - influence) * 0.12;
      material.uniforms.uPointer.value.copy(pointer);
      material.uniforms.uInfluence.value = influence;
      renderer.render(scene, camera);

      if (pointer.distanceToSquared(pointerTarget) > 0.00001 || Math.abs(influence - influenceTarget) > 0.01) {
        frame = window.requestAnimationFrame(animatePointer);
      } else {
        frame = 0;
      }
    };

    const requestPointerRender = () => {
      if (reducedMotion) {
        pointer.copy(pointerTarget);
        influence = influenceTarget;
        material.uniforms.uPointer.value.copy(pointer);
        material.uniforms.uInfluence.value = influence;
        renderer.render(scene, camera);
      } else if (!frame) {
        frame = window.requestAnimationFrame(animatePointer);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      if (event.clientY > bounds.bottom) return;
      pointerTarget.set(
        Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
        1 - Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)),
      );
      influenceTarget = 1;
      requestPointerRender();
    };

    const onPointerLeave = () => {
      influenceTarget = 0;
      requestPointerRender();
    };

    const resizeObserver = new ResizeObserver(resize);
    if (hero) resizeObserver.observe(hero);
    if (panorama) resizeObserver.observe(panorama);
    hero?.addEventListener("pointermove", onPointerMove);
    hero?.addEventListener("pointerleave", onPointerLeave);
    resize();

    renderer.render(scene, camera);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      hero?.removeEventListener("pointermove", onPointerMove);
      hero?.removeEventListener("pointerleave", onPointerLeave);
      background.geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="hero-shader" aria-hidden="true" />;
}