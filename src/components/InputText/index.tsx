interface InputTextProps {
  label?: string
  placeholder?: string
  value?: string
  name?: string
  id?: string | undefined
}

export const InputText = ({
  label,
  placeholder,
  value,
  name,
  id,
  ...props
}: InputTextProps) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="text-white mb-2">
          {label}
        </label>
        <input
          id={id}
          type="text"
          className="w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] hover:bg-opacity-[24%] text-white focus-within:outline-none lg:col-span-2"
          placeholder={placeholder}
          value={value}
          name={name}
          {...props}
        />
      </div>
    </>
  )
}
