"use client";

import { Menu } from "@/components/Menu";
import db, { DbItem } from "../../utils/utils";
import { CodeEditor } from "@/components/CodeEditor";
import { useState } from "react";

export default function Community() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const handleToggleHighlight = (index: number) => {
    setHighlightedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <main className="grid grid-cols-4 lg:mt-8 h-[calc(100vh-152px)] mt-4 overflow-y-auto">
        <aside className="col-span-1 hidden lg:flex">
          <Menu />
        </aside>
        {db?.map((item: DbItem, index: number) => (
          <section
            key={index}
            className="col-span-4 lg:col-span-3 lg:col-start-2  p-4"
          >
            <CodeEditor
              key={index}
              bgColor={item.color}
              showHighlight={highlightedIndex === index}
              code={item.code}
            />
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
  );
}
