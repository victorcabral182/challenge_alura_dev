import { Button } from "../Button"
import { InputSelect } from "../InputSelect"
import { InputText } from "../InputText"
import { InputTextArea } from "../InputTextArea"

interface InsertFormProps {
  handleColor: (e: any) => void
}

export const InsertForm = ({ handleColor }: InsertFormProps) => {
  const languages = [
    {
      label: "JavaScript",
      value: "javascript",
    },
  ]
  return (
    <>
      <section className="w-full flex flex-col gap-7 p-5 lg:pr-0">
        <p className="text-white text-base uppercase font-bold">Seu projeto</p>
        <InputText
          id="name"
          label="Nome"
          placeholder="Digite o nome do projeto"
        />
        <InputTextArea
          id="description"
          label="Descrição"
          placeholder="Descreva o seu projeto"
        />
        <p className="text-white text-[14px] uppercase font-bold text-base">
          Personalização
        </p>
        <div className="flex flex-col md:flex-row lg:flex-col gap-6">
          <InputSelect label="Linguagem" options={languages} />
          <input
            defaultValue="#5081FB"
            onChange={handleColor}
            type="color"
            className="w-full h-14 p-1 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2 cursor-pointer"
            placeholder="Descrição do seu projeto"
          />
        </div>
        <Button variant="filled" type="button">
          Salvar projeto
        </Button>
      </section>
    </>
  )
}
