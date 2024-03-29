"use client"

import { CodeEditor } from "@/components/CodeEditor"
import { InsertForm } from "@/components/InsertForm"
import { Menu } from "@/components/Menu"
import { useState } from "react"

export default function Home() {
  const [showHighlight, setShowHighlight] = useState<boolean>(false)
  const [codeEditorBgColor, setCodeEditorBgColor] = useState<string>("#6BD1FF")

  return (
    <main className="grid grid-cols-4 lg:mt-8 h-[calc(100vh-100px)] md:h-[calc(100vh-152px)] overflow-y-auto mt-4">
      <aside className="col-span-1 hidden lg:flex">
        <Menu />
      </aside>
      <section className="col-span-4 lg:col-span-2 p-4">
        <CodeEditor color={codeEditorBgColor} showHighlight={showHighlight} />
        <button
          onClick={() => setShowHighlight(!showHighlight)}
          className="bg-[#5081FB14] h-14 rounded-lg text-white w-full mt-8"
        >
          {showHighlight ? "Desabilitar highlight" : "Visualizar com highlight"}
        </button>
      </section>
      <aside className="col-span-4 lg:col-span-1 lg:flex lg:justify-end">
        <InsertForm
          handleColor={(e: any) => setCodeEditorBgColor(e.target.value)}
        />
      </aside>
    </main>
  )
}
