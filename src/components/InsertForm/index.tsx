interface InsertFormProps {
  handleColor: (e: any) => void;
}

export const InsertForm = ({ handleColor }: InsertFormProps) => {
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
    {
      label: "C#",
      value: "csharp",
    },
  ];
  return (
    <>
      <section className="flex flex-col gap-7 p-5 lg:pr-0">
        <p className="text-white text-[14px] uppercase">Seu projeto</p>
        <input
          type="text"
          className=" w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Nome do seu projeto"
        />
        <textarea
          className=" w-full h-[120px] p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Descrição do seu projeto"
        />
        <p className="text-white text-[14px] uppercase">Personalização</p>
        <div className="flex flex-col md:flex-row lg:flex-col gap-6">
          <select
            className=" w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
            placeholder="Nome do seu projeto"
          >
            {languages.map((item) => (
              <option className="text-black" key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <input
            defaultValue="#5081FB"
            onChange={handleColor}
            type="color"
            className=" w-full h-14 p-1 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
            placeholder="Descrição do seu projeto"
          />
        </div>
        <button className="bg-[#5081FB] h-14 rounded-lg w-full" type="button">
          Salvar projeto
        </button>
      </section>
    </>
  );
};
