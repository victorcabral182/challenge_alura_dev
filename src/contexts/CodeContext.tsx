"use client"

import React, { createContext, useState, ReactNode } from "react"

export interface CodeContextProps {
  card: string
  setCard: React.Dispatch<React.SetStateAction<DbItem>>
  Db: DbItem
  setDb: React.Dispatch<React.SetStateAction<DbItem>>
  handleInsertCode: () => void
}

interface GeneralProviderProps {
  children: ReactNode
}

interface DbItem {
  title: string | null | undefined
  description: string | null | undefined
  likes: number | null | undefined
  comments: number | null | undefined
  code: string | null | undefined
  color: string | null | undefined
  author: string | null | undefined
}

const CodeContext = createContext<any | undefined>(undefined)

const CodeProvider = ({ children }: any) => {
  const initialArray = [
    {
      title: "Algoritmo de Luhn",
      author: "FillDias",
      description: "Verifica se um número de cartão de crédito é válido.",
      color: "#6BD1FF",
      likes: 43,
      comments: 6,
      code: `function isValidCreditCardNumber(cardNumber) {
        cardNumber = cardNumber.replace(/\s/g, '');
        if (!/^\d+$/.test(cardNumber)) {
          return false;
        }
        const digits = cardNumber.split('').map(Number);
        digits.reverse();
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
          let digit = digits[i];
          if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
          sum += digit;
        }
        return sum % 10 === 0;
      }
      
      // Exemplo de uso:
      const cardNumber = "1234 5678 9012 3456";
      if (isValidCreditCardNumber(cardNumber)) {
        console.log("O número do cartão é válido.");
      } else {
        console.log("O número do cartão não é válido.");
      }`,
    },
    {
      title: "ordenarArray",
      author: "victorcabral182",
      description:
        "Função para ordenar um array de forma ascendente ou descendente",
      color: "#4A9BC7",
      likes: 28,
      comments: 4,
      code: `function ordenarArray(arr, ordem) {
        if (ordem === "ascendente") {
          return arr.sort(function(a, b) {
            return a - b;
          });
        } else if (ordem === "descendente") {
          return arr.sort(function(a, b) {
            return b - a;
          });
        } else {
          console.error("Por favor, forneça uma ordem válida ('ascendente' ou 'descendente').");
          return arr;
        }
      }
      
      // Exemplo de uso:
      const arrayParaOrdenar = [5, 2, 8, 1, 4];
      const arrayAscendente = ordenarArray(arrayParaOrdenar, "ascendente");
      const arrayDescendente = ordenarArray(arrayParaOrdenar, "descendente");
      
      console.log("Array original:", arrayParaOrdenar);
      console.log("Array ordenado (ascendente):", arrayAscendente);
      console.log("Array ordenado (descendente):", arrayDescendente);
      `,
    },
    {
      title: "Estrutura base do HTML",
      author: "mmelotti",
      description: "Exemplo de um código html básico",
      color: "#8ED9FF",
      likes: 35,
      comments: 8,
      code: `<!DOCTYPE html>
      <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Minha Página</title>
          <!-- Adicione links para folhas de estilo (CSS) ou scripts (JavaScript) aqui, se necessário -->
      </head>
      <body>
      
          <!-- O conteúdo da sua página vai aqui -->
      
          <!-- Adicione scripts JavaScript aqui, se necessário -->
      
      </body>
      </html>
      `,
    },
    {
      title: "Exemplos de código CSS",
      author: "felipe1almeida",
      description: "Utilizando CSS raíz",
      color: "#6BFFD1",
      likes: 19,
      comments: 3,
      code: `.minha-classe {
        font-family: Arial, sans-serif;
        font-size: 16px;
        color: #333;
        padding: 10px;
        border: 1px solid #ccc;
        background-color: #f0f0f0;
    }

    /* Adicionando classes específicas à classe "minha-classe" */
    .minha-classe.destaque {
        background-color: #ffe600; /* Amarelo */
        font-weight: bold;
    }

    .minha-classe.margem-superior {
        margin-top: 20px;
    }

    .minha-classe.texto-vermelho {
        color: #ff0000; /* Vermelho */
    }`,
    },
  ]
  const [Db, setDb] = useState<any>(initialArray)
  const [card, setCard] = useState<any>({
    title: "",
    description: "",
    likes: null,
    comments: null,
    code: "",
    color: "",
    author: "",
  })

  const handleInsertCode = (newItem: any) => {
    setDb([...Db, newItem])
  }

  return (
    <CodeContext.Provider
      value={{ card, setCard, Db, setDb, handleInsertCode }}
    >
      {children}
    </CodeContext.Provider>
  )
}

export { CodeProvider, CodeContext }
