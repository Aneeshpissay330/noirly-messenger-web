import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, className = "", containerClassName = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-black font-display">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`rounded-xl border border-gray-200 bg-white/60 text-black font-display px-5 py-3 text-base focus:ring-2 focus:ring-[#FF0000] focus:border-[#FF0000] transition-all duration-150 outline-none shadow-glass placeholder:text-gray-400 ${className}`}
          style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
