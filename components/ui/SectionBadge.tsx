interface SectionBadgeProps {
  number: string;
  label: string;
  light?: boolean;
}

export default function SectionBadge({
  number,
  label,
  light = false,
}: SectionBadgeProps) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.2em] uppercase ${
        light ? "text-[#86b5b2]" : "text-[#0d736d]"
      }`}
    >
      {number} / {label}
    </p>
  );
}
