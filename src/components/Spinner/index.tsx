import Image from "next/image"
import spinner from "../../assets/image/90-ring.svg"

export const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image src={spinner} alt="Loading..." className="animate-spin" />
      </div>
    </>
  )
}
