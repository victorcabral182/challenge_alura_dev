import { InsertForm } from "@/components/InsertForm";
import { Menu } from "@/components/Menu";

export default function Community() {
  return (
    <>
      <main className="grid grid-cols-4 lg:mt-8 h-[calc(100vh-152px)] mt-4 overflow-y-auto">
        <aside className="col-span-1 hidden lg:flex">
          <Menu />
        </aside>
        <section className="col-span-4 lg:col-span-3 p-4">
          <div className="bg-[#6BD1FF] rounded-lg p-4">
            <div className="flex flex-col bg-[#141414] rounded-lg p-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
                <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
                <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
              </div>
              <textarea
                placeholder="Write your code here"
                className="py-2 bg-transparent min-h-[190px] text-white focus-within:outline-none"
                spellCheck={false}
              />
            </div>
          </div>
          <button className="bg-[#5081FB14] h-14 rounded-lg text-white w-full mt-8">
            Visualizar com highlight
          </button>
        </section>
      </main>
    </>
  );
}
