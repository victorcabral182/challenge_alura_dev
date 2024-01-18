"use client"

import { AiFillHeart } from "react-icons/ai"
import { BsFillChatFill } from "react-icons/bs"
import { Menu } from "@/components/Menu"
import { DbItem } from "../../utils/utils"
import { CodeEditor } from "@/components/CodeEditor"
import { useContext, useState } from "react"
import { CodeContext } from "@/contexts/CodeContext"

export default function Community() {
  const codeContext = useContext(CodeContext)
  const { Db } = codeContext
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const handleToggleHighlight = (index: number) => {
    setHighlightedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <main className="grid grid-cols-4 lg:mt-8 h-[calc(100vh-100px)] md:h-[calc(100vh-152px)] mt-4 overflow-y-auto">
        <aside className="col-span-1 hidden lg:flex">
          <Menu />
        </aside>
        {Db &&
          Db?.map((item: DbItem, index: number) => (
            <section
              key={index}
              className="col-span-4 lg:col-span-2 lg:col-start-2 p-4"
            >
              <CodeEditor
                key={index}
                color={item.color}
                showHighlight={highlightedIndex === index}
                code={item.code}
              />
              <div className="relative flex flex-col gap2 bg-[#000] bg-opacity-[16%] rounded-b-lg p-6 text-white">
                <h1 className="text-[16px]">{item.title}</h1>
                <p className="text-white text-[14px] text-opacity-80">
                  {item.description}
                </p>
                <div className="flex gap-2 mt-4 lg:mt-6">
                  <div className="flex items-center text-white gap-1">
                    <BsFillChatFill />
                    <span>{item.comments}</span>
                  </div>
                  <div className="flex items-center text-white gap-1">
                    <AiFillHeart />
                    <span>{item.likes}</span>
                  </div>
                  <div className="ml-auto flex justify-end items-center hover:bg gap-2 w-fit lg:w-full lg:col-span-1">
                    <img
                      className="w-10 rounded-full"
                      src={`https://github.com/${item.author}.png`}
                      alt="Foto do github"
                    />
                    <span className="text-white">{item.author}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleToggleHighlight(index)}
                className="bg-[#5081FB14] h-14 rounded-lg text-white w-full mt-8"
              >
                {highlightedIndex === index
                  ? "Desabilitar highlight"
                  : "Visualizar com highlight"}
              </button>
            </section>
          ))}
      </main>
    </>
  )
}
