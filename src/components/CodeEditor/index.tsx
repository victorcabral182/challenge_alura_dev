"use client"

import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import { useContext, useEffect, useState } from "react"
import "highlight.js/styles/default.css"
import "highlight.js/styles/monokai.css"

import html2canvas from "html2canvas"
import download from "downloadjs"
import { Button } from "../Button"
import { CodeContext, CodeContextProps } from "@/contexts/CodeContext"

interface CodeEditorProps {
  color: string
  showHighlight?: boolean
  code?: string
  disabled?: boolean
  readOnly?: boolean
  id?: any
}

export const CodeEditor = ({
  showHighlight,
  disabled,
  code,
  readOnly,
  color,
  id,
}: CodeEditorProps) => {
  const context = useContext(CodeContext)
  const { card, setCard } = context

  const [editorValue, setEditorValue] = useState<string>("")

  const highlightedCode = showHighlight
    ? hljs.highlightAuto(editorValue).value
    : editorValue

  const containerStyles = {
    backgroundColor: color || "transparent",
  }

  const saveImage = async () => {
    const codeEditor = document.getElementById(`code-editor`)
    if (codeEditor) {
      try {
        const canvas = await html2canvas(codeEditor)
        const dataUrl = canvas.toDataURL("image/png")
        download(dataUrl, `code_image.png`, "image/png")
      } catch (error) {
        console.error("Error saving image:", error)
      } finally {
      }
    }
  }

  useEffect(() => {
    hljs.registerLanguage("javascript", javascript)
    hljs.initHighlightingOnLoad()
    hljs.highlightAll()
  }, [])

  useEffect(() => {
    if (code) {
      setEditorValue(code)
    }
  }, [code])

  useEffect(() => {
    setCard({ ...card, code: editorValue })
  }, [editorValue]) // eslint-disable-line

  return (
    <div id={id} className="rounded-lg p-4" style={containerStyles}>
      <div
        className={`flex flex-col bg-[#141414] rounded-lg p-4 ${
          showHighlight && "mb-4"
        }`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
          <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
          <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
        </div>
        <textarea
          readOnly={readOnly}
          disabled={disabled}
          placeholder="Escreva seu código aqui"
          className="py-2 bg-transparent min-h-[190px] text-white focus-within:outline-none"
          spellCheck={false}
          onChange={(e) => {
            setEditorValue(e.target.value)
          }}
          value={editorValue}
        />
      </div>
      {showHighlight && (
        <>
          <pre id={`code-editor`} className="relative">
            <code
              className={`hljs language-javascript w-full h-full hljs-monokai`}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
          <Button
            type="button"
            variant="filled"
            className="h-[40px] mt-4 w-full top-[8px] right-[16px]"
            onClick={() => saveImage()}
          >
            Exportar
          </Button>
        </>
      )}
    </div>
  )
}
