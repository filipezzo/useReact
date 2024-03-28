import { Logo } from "../../../components/Logo";
export function Description() {
  return (
    <section className="bg-sky-900">
      <div className="mx-auto flex max-w-3xl flex-col items-center  justify-center  px-4 py-32">
        <h2 className="mb-8 text-4xl font-bold sm:text-5xl ">Porquê React?</h2>
        <DescCard text=" O React é altamente performático. Ele utiliza uma árvore UI para comparar com o DOM real e realiza alterações apenas quando necessário, o que melhora significativamente o desempenho da aplicação. Lembre-se que modificar o DOM diretamente custa caro 💵" />
        <DescCard
          order
          text="React utiliza um modelo baseado em componentes, permitindo a divisão da UI em pequenos componentes reutilizáveis. Isso torna o código mais modular e fácil de manter 🦥"
        />
        <DescCard text="O React possui um vasto ecossistema de bibliotecas, ferramentas e recursos que facilitam o desenvolvimento por ser uma lib de construção de interfaces 🐳" />
      </div>
    </section>
  );
}

const DescCard = ({ order = false, text }) => {
  return (
    <div className="mb-16 flex w-full items-center gap-4 ">
      <Logo />
      <p
        className={`${order && "order-first"} sm:w-[430px] sm:flex-1 sm:leading-7`}
      >
        {text}
      </p>
    </div>
  );
};
