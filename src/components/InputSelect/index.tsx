"use client";

import { BiChevronDown } from "react-icons/bi";
import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLSelectElement> | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  onBlur?: FocusEventHandler<HTMLSelectElement> | undefined;
  options: Option[];
  control: any;
  id?: string;
}

export const InputSelect = ({
  className,
  label,
  name,
  onBlur,
  onChange,
  onClick,
  placeholder,
  value,
  options,
  control,
  id,
  ...props
}: InputSelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  if (!control) {
    return;
  }
  return (
    <>
      <div className="flex flex-col">
        {label && <label className="text-white mb-2">{label}</label>}
        <div className="relative cursor-pointer">
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <select
                className={`${className} z-10 w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] hover:bg-opacity-[24%] text-white focus-within:outline-none lg:col-span-2 cursor-pointer`}
                onClick={() => {
                  setIsActive(!isActive);
                  onClick;
                }}
                onChange={(e) => field.onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                name={name}
                value={value}
                {...props}
              >
                <option value={undefined} defaultChecked className="text-black">
                  Selecione
                </option>
                {options?.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    className="text-black cursor-pointer"
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            )}
          />
          <BiChevronDown
            className={`absolute pointer-events-none transition-all ease-in-out duration-150 ${
              isActive && "rotate-180"
            } text-white text-[32px] top-3 right-2`}
          />
        </div>
      </div>
    </>
  );
};
