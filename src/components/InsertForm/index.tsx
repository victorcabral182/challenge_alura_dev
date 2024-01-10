import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { InputSelect } from "../InputSelect"
import { InputText } from "../InputText"
import { InputTextArea } from "../InputTextArea"
import { useContext, useEffect, useMemo, useState } from "react"
import { CodeContext } from "@/contexts/CodeContext"
import { Spinner } from "../Spinner"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"

interface InsertFormProps {
  handleColor: (e: any) => void
}

export const InsertForm = ({ handleColor }: InsertFormProps) => {
  const navigate = useRouter()
  const codeContext = useContext(CodeContext)
  const {
    card,
    handleInsertCode,
    setEmptyCodeError,
    setCard,
    resetCode,
    setResetCode,
  } = codeContext
  const [isLoadingInsertForm, setIsloadingInsertForm] = useState<boolean>(false)

  const codeSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    language: yup.string().required("Campo obrigatório"),
    color: yup.string(),
    code: yup.string().required("Campo obrigatório"),
  })

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      language: undefined,
      color: "#5081FB",
      code: "",
    },
    resolver: yupResolver(codeSchema),
  })

  const watchedLanguage = watch("language")

  const handleRandomNumbers = () => {
    return Math.floor(Math.random() * 50)
  }

  const languages = [
    {
      label: "HTML",
      value: "xml",
    },
    {
      label: "CSS",
      value: "css",
    },
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
  ]

  const sendCardToDb = (form: any) => {
    setIsloadingInsertForm(true)
    const newItem = {
      ...form,
      author: "victorcabral182",
      likes: handleRandomNumbers(),
      comments: handleRandomNumbers(),
      code: card.code,
    }
    handleInsertCode(newItem)
    setTimeout(() => {
      setIsloadingInsertForm(false)
      reset({})
      setCard({})
      setResetCode(true)
      toast.success("Código adicionado com sucesso")
    }, 2000)
  }

  useMemo(() => {
    setValue("code", card.code)
  }, [card.code]) // eslint-disable-line

  useEffect(() => {
    setEmptyCodeError(errors.code?.message)
  }, [errors.code]) // eslint-disable-line

  useMemo(() => {
    setCard({ ...card, language: watchedLanguage })
  }, [watchedLanguage]) // eslint-disable-line

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(sendCardToDb)} className="">
        <section className="w-full flex flex-col justify-end gap-7 p-5 lg:pr-0">
          <p className="text-white text-base uppercase font-bold">
            Seu projeto
          </p>
          <InputText
            control={control}
            name="title"
            id="name"
            label="Nome"
            placeholder="Digite o nome do projeto"
            errors={errors.title?.message}
          />
          <InputTextArea
            control={control}
            name="description"
            id="description"
            label="Descrição"
            placeholder="Descreva o seu projeto"
            errors={errors.description?.message}
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
              errors={errors.language?.message}
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
