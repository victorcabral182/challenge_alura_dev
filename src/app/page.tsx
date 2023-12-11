import { InsertForm } from "@/components/InsertForm";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <main className="grid grid-cols-4 lg:mt-8 h-[calc(100vh-152px)]">
      <aside className="col-span-1 hidden lg:flex">
        <Menu />
      </aside>
      <div className="col-span-2 border border-white">Conteúdo central</div>
      <aside className="col-span-1">
        <InsertForm />
      </aside>
    </main>
  );
}
