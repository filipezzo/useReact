import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const createFormSchema = z.object({
  nome: z.string().min(3, "Seu nome precisa ter ao menos 3 letras"),
  email: z
    .string()
    .min(1, "o email é obrigatório")
    .email("formato de email inválido"),
  celular: z.string().min(9, "seu número deve conter 9 números"),
  mensagem: z.string().min(10, "sua mensagem deve ter ao menos 10 caracteres"),
});

export function Contact() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      celular: "",
      mensagem: "",
    },
    resolver: zodResolver(createFormSchema),
  });

  const sendEmail = () => {
    const formData = getValues();
    console.log(formData);
    toast.success("Email enviado com sucesso", { position: "top-center" });
    reset();
  };
  return (
    <section id="contato">
      <div className="w-full px-4 py-32 dark:bg-stone-950 ">
        <h2 className="mb-2 text-center text-2xl text-sky-500 sm:text-5xl">
          Entre em Contato
        </h2>
        <form
          className="area grid md:mx-auto md:max-w-[960px]"
          onSubmit={handleSubmit(sendEmail)}
        >
          <Input
            label="Nome"
            className="area-nome"
            control={{ ...register("nome", { required: true }) }}
          />
          {errors.nome && (
            <span className="area-error1 text-rose-500">
              {errors.nome.message}
            </span>
          )}
          <Input
            style={{ gridArea: "email" }}
            className="area-email"
            label="Email"
            type="email"
            control={{ ...register("email", { required: true }) }}
          />

          {errors.email && (
            <span className="area-error2 text-rose-500">
              {errors.email.message}
            </span>
          )}
          <Input
            label="Celular"
            className="area-celular"
            control={{ ...register("celular", { required: true }) }}
          />

          {errors.celular && (
            <span className="area-error3 text-rose-500">
              {errors.celular.message}
            </span>
          )}
          <Textarea
            label="Mensagem"
            className="area-mensagem"
            control={{ ...register("mensagem", { required: true }) }}
          />
          {errors.mensagem && (
            <span className="area-error4 text-rose-500">
              {errors.mensagem.message}
            </span>
          )}
          <div className="area-btn flex w-full  sm:justify-end">
            <button
              disabled={!isDirty}
              className=" h-9 w-full min-w-16 rounded-md bg-sky-500 px-4 py-1.5 text-sm font-medium uppercase text-black shadow-md hover:scale-105 hover:transition-all disabled:cursor-not-allowed disabled:opacity-50  sm:max-w-24"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
