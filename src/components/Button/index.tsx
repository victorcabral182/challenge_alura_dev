interface ButtonProps {
  variant: "filled" | "outlined"
  className?: string
  children?: string
  onClick?: (value: any) => any
  type: "button" | "reset" | "submit" | undefined
}

export const Button = ({
  onClick,
  variant,
  className,
  children,
  type,
}: ButtonProps) => {
  const handleVariantStyle = (variant: string) => {
    switch (variant) {
      case "filled":
        return "bg-[#5081FB] hover:bg-[#7BA4FC] active:border-4 border-[#5081FB] h-14 rounded-lg w-full"
      case "outlined":
        return "bg-[#5081FB14] hover:bg-[#5081FB29] active:border-4 border-[#5081FB3D] h-14 rounded-lg text-white w-full"
    }
  }
  return (
    <>
      <button
        className={`${className} ${handleVariantStyle(variant)}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
