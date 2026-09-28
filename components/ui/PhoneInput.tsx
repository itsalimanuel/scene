"use client";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  dark?: boolean;
};

function isUaePhone(value: string) {
  const number = value.replace(/[\s().-]/g, "");
  return /^(?:\+971|00971|0?5[024568])/.test(number);
}

export default function PhoneInput({
  value,
  onChange,
  placeholder,
  required = false,
  dark = false,
}: PhoneInputProps) {
  const detectedUae = isUaePhone(value);
  const inputClassName = dark
    ? "bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
    : "bg-white border-[#e8eaed] text-[#0f1923] placeholder:text-neutral-400";

  return (
    <div className="relative" dir="ltr">
      {detectedUae && (
        <span className={`absolute inset-y-0 left-3 flex items-center text-[10px] font-bold pointer-events-none ${dark ? "text-[#86b5b2]" : "text-[#0d736d]"}`}>
          UAE +971
        </span>
      )}
      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full ${detectedUae ? "pl-[4.7rem]" : "px-3.5"} py-2.5 rounded-lg border text-xs focus:outline-none focus:border-[#0d736d] transition-[padding] ${inputClassName}`}
      />
    </div>
  );
}
