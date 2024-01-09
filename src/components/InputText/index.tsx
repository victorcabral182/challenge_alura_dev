import React, { InputHTMLAttributes } from "react"
import { Controller } from "react-hook-form"
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  name: string
  value?: string
  id?: string | undefined
  className?: string
  classNameParentDiv?: string
  control?: any
  errors?: any
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  name,
  id,
  className,
  classNameParentDiv,
  control,
  errors,
  ...rest
}: InputTextProps) => {
  if (!control) {
    return null
  }
  return (
    <>
      <div className={`w-full flex flex-col ${classNameParentDiv}`}>
        <label htmlFor={id} className="text-white mb-2">
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              id={id}
              type="text"
              className={`w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] hover:bg-opacity-[24%] text-white focus-within:outline-none ${className}`}
              placeholder={placeholder}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              {...rest}
            />
          )}
        />
        {errors && <span className=" text-red-400 text-[10px]">{errors}</span>}
      </div>
    </>
  )
}
