"use client"

import { HiUserGroup } from "react-icons/hi"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuMobileProps {
  className: string
}

export const MenuMobile = ({ className }: MenuMobileProps) => {
  const pathname = usePathname()

  const handleMenuCss = (path: string, id: number) => {
    const isMatching = path === pathname
    if (isMatching && (id === 1 || id === 2)) {
      return ""
    }
    return "opacity-40"
  }

  return (
    <>
      <section
        className={`absolute transition-all duration-300 ease-in-out flex flex-col p-4 gap-4 h-[50%] w-[60%] top-[84.69px] md:top-[120px] md:w-[35%] bg-[#051D3B] bg-opacity-95  rounded-s-lg ${className}`}
      >
        <p className="text-white text-[14px] uppercase">Menu</p>
        <Link href="/">
          <div
            className={`flex items-center justify-start gap-2 text-white ${handleMenuCss(
              "/",
              1
            )}`}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#5081FB] rounded-2xl">
              <span>{"</>"}</span>
            </div>
            Editor de código
          </div>
        </Link>
        <Link href="/community">
          <div
            className={`flex items-center justify-start gap-2 text-white ${handleMenuCss(
              "/community",
              2
            )}`}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#5081FB] rounded-2xl">
              <HiUserGroup className="text-white text-[20px]" />
            </div>
            Comunidade
          </div>
        </Link>
      </section>
    </>
  )
}
