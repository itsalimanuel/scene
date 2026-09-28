"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type SelectProps = {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
};

export default function Select({
  options,
  placeholder,
  value,
  onChange,
  ariaLabel,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    const closeWhenClickedOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeWhenClickedOutside);
    return () => document.removeEventListener("pointerdown", closeWhenClickedOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8eaed] bg-white text-left text-xs focus:outline-none focus:border-[#0d736d] flex items-center justify-between gap-3 transition-colors"
      >
        <span className={value ? "text-[#0f1923]" : "text-neutral-400"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#0d736d] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute z-20 mt-1.5 w-full max-h-52 overflow-y-auto rounded-lg border border-[#e8eaed] bg-white p-1 shadow-lg"
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full rounded-md px-3 py-2 text-left text-xs transition-colors flex items-center justify-between gap-3 ${
                  selected
                    ? "bg-[#0d736d]/10 text-[#0d736d] font-semibold"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {option}
                {selected && <Check className="w-3.5 h-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
