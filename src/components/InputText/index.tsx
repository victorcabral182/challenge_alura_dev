interface InputTextProps {
  label?: string
  placeholder?: string
  value?: string
  name?: string
  id?: string | undefined
  className?: string
  classNameParentDiv?: string
}

export const InputText = ({
  label,
  placeholder,
  value,
  name,
  id,
  className,
  classNameParentDiv,
  ...props
}: InputTextProps) => {
  return (
    <>
      <div className={`w-full flex flex-col ${classNameParentDiv}`}>
        <label htmlFor={id} className="text-white mb-2">
          {label}
        </label>
        <input
          id={id}
          type="text"
          className={`w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] hover:bg-opacity-[24%] text-white focus-within:outline-none ${className}`}
          placeholder={placeholder}
          value={value}
          name={name}
          {...props}
        />
      </div>
    </>
  )
}
