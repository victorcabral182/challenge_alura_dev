"use client";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useState } from "react";
import "highlight.js/styles/default.css";

interface CodeEditorProps {
  showHighlight?: boolean;
  bgColor?: string;
}

export const CodeEditor = ({ showHighlight, bgColor }: CodeEditorProps) => {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.initHighlightingOnLoad();
    hljs.highlightAll();
  }, []);

  const highlightedCode = showHighlight
    ? hljs.highlightAuto(editorValue).value
    : editorValue;

  const containerStyles = {
    backgroundColor: bgColor || "transparent",
  };

  return (
    <div className="rounded-lg p-4" style={containerStyles}>
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
          placeholder="Escreva seu código aqui"
          className="py-2 bg-transparent min-h-[190px] text-white focus-within:outline-none"
          spellCheck={false}
          onChange={(e) => setEditorValue(e.target.value)}
          value={editorValue}
        />
      </div>
      {showHighlight && (
        <pre>
          <code
            className={`hljs language-javascript`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      )}
    </div>
  );
};
