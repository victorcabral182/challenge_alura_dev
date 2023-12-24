import React, { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";

interface InputTextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  control: any;
  id?: string | undefined;
}

export const InputTextArea = ({
  label,
  placeholder,
  value,
  name,
  id,
  control,
  ...props
}: InputTextAreaProps) => {
  if (!control) {
    return;
  }
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="text-white mb-2">
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <textarea
              id={id}
              className="w-full h-[120px] p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] hover:bg-opacity-[24%] text-white focus-within:outline-none lg:col-span-2"
              placeholder={placeholder}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              name={name}
              {...props}
            />
          )}
        />
      </div>
    </>
  );
};
