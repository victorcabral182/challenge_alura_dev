export const InsertForm = () => {
  const languages = [
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "TypeScript",
      value: "javascript",
    },
    {
      label: "Java",
      value: "javascript",
    },
    {
      label: "C#",
      value: "javascript",
    },
  ];
  return (
    <>
      <section className="flex flex-col gap-7 p-5 pr-0">
        <p className="text-white text-[14px] uppercase">Seu projeto</p>
        <input
          type="text"
          className="hidden md:flex w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Nome do seu projeto"
        />
        <textarea
          className="hidden md:flex w-full h-[120px] p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Descrição do seu projeto"
        />
        <p className="text-white text-[14px] uppercase">Personalização</p>
        <select
          className="hidden md:flex w-full h-14 p-4 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Nome do seu projeto"
        >
          {languages.map((item) => (
            <option className="text-black" key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <input
          type="color"
          className="hidden md:flex w-full h-14 p-1 rounded-lg bg-[#ffffff] bg-opacity-[16%] text-white focus-within:outline-none lg:col-span-2"
          placeholder="Descrição do seu projeto"
        />
        <button className="bg-[#5081FB] h-14 rounded-lg w-full" type="button">
          Salvar projeto
        </button>
      </section>
    </>
  );
};
