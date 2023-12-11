import Link from "next/link";
import { HiUserGroup } from "react-icons/hi";

export const Menu = () => {
  return (
    <>
      <section className="flex flex-col gap-7">
        <p className="text-white text-[14px] uppercase">Menu</p>
        <Link href="#">
          <div className="flex items-center justify-start gap-2 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-[#5081FB] rounded-2xl">
              <span>{"</>"}</span>
            </div>
            Editor de código
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center justify-start gap-2 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-[#5081FB] rounded-2xl">
              <HiUserGroup className="text-white text-[20px]" />
            </div>
            Comunidade
          </div>
        </Link>
      </section>
    </>
  );
};
