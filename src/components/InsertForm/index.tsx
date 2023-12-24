import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { InputSelect } from "../InputSelect"
import { InputText } from "../InputText"
import { InputTextArea } from "../InputTextArea"
import { useContext, useState } from "react"
import { CodeContext, CodeContextProps } from "@/contexts/CodeContext"
import { Spinner } from "../Spinner"

interface InsertFormProps {
  handleColor: (e: any) => void
}

export const InsertForm = ({ handleColor }: InsertFormProps) => {
  const codeContext = useContext(CodeContext)
  const { card, handleInsertCode, setCard } = codeContext

  const [isLoadingInsertForm, setIsloadingInsertForm] = useState<boolean>(false)

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      title: "",
      description: "",
      language: "",
      color: "#5081FB",
    },
  })

  const handleRandomNumbers = () => {
    return Math.floor(Math.random() * 50)
  }

  const languages = [
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
    {
      label: "Java",
      value: "java",
    },
  ]

  const sendCardToDb = (form: any) => {
    setIsloadingInsertForm(true)
    setCard({
      ...card,
      ...form,
      author: "victorcabral182",
      likes: handleRandomNumbers(),
      comments: handleRandomNumbers(),
    })
    setTimeout(() => {
      handleInsertCode()
      setIsloadingInsertForm(false)
    }, 1500)
  }

  return (
    <>
      <form onSubmit={handleSubmit(sendCardToDb)}>
        <section className="w-full flex flex-col gap-7 p-5 lg:pr-0">
          <p className="text-white text-base uppercase font-bold">
            Seu projeto
          </p>
          <InputText
            control={control}
            name="title"
            id="name"
            label="Nome"
            placeholder="Digite o nome do projeto"
          />
          <InputTextArea
            control={control}
            name="description"
            id="description"
            label="Descrição"
            placeholder="Descreva o seu projeto"
          />
          <p className="text-white text-[14px] uppercase font-bold text-base">
            Personalização
          </p>
          <div className="flex flex-col md:flex-row lg:flex-col gap-6">
            <InputSelect
              control={control}
              name="language"
              label="Linguagem"
              options={languages}
            />
            <input
              {...register("color")}
              name="color"
              onChange={handleColor}
              type="color"
              className="w-full h-14 p-1 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2 cursor-pointer"
              placeholder="Descrição do seu projeto"
            />
          </div>
          <Button variant="filled" type="submit">
            {!isLoadingInsertForm ? "Salvar projeto" : <Spinner />}
          </Button>
        </section>
      </form>
    </>
  )
}
