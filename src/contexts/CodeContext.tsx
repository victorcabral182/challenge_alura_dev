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
      code: `function luhnAlgorithm(cardNumber) {
    // Implementação do Algoritmo de Luhn
    // ...
    return isValid;
  }
      `,
    },
    {
      title: "Sistema de Recomendação",
      author: "victorcabral182",
      description:
        "Algoritmo para recomendar itens com base no histórico do usuário.",
      color: "#4A9BC7",
      likes: 28,
      comments: 4,
      code: `function recommendationSystem(userHistory) {
    // Implementação do Sistema de Recomendação
    // ...
    return recommendedItems;
  }
      `,
    },
    {
      title: "Redes Neurais",
      author: "mmelotti",
      description:
        "Introdução aos princípios básicos das redes neurais artificiais.",
      color: "#8ED9FF",
      likes: 35,
      comments: 8,
      code: `// Exemplo de uma rede neural simples
  class NeuralNetwork {
    constructor() {
      // Inicialização da rede neural
      // ...
    }
  
    train(data) {
      // Treinamento da rede neural
      // ...
    }
  
    predict(input) {
      // Predição usando a rede neural treinada
      // ...
      return prediction;
    }
  }
      `,
    },
    {
      title: "Classificação de Imagens",
      author: "felipe1almeida",
      description:
        "Utilizando algoritmos de aprendizado de máquina para classificar imagens.",
      color: "#6BFFD1",
      likes: 19,
      comments: 3,
      code: `// Exemplo de classificação de imagens usando aprendizado de máquina
  function classifyImage(imageData) {
    // Implementação do algoritmo de classificação
    // ...
    return classificationResult;
  }
      `,
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
