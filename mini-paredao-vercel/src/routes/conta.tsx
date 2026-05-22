import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ChevronLeft, User as UserIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/conta")({
  head: () => ({
    meta: [
      { title: "Minha Conta — Mini Paredão BR" },
      { name: "description", content: "Acesse sua conta Mini Paredão BR." },
    ],
  }),
  component: ContaPage,
});

function ContaPage() {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-[oklch(0.97_0_0)]">
      <header className="relative flex items-center justify-center bg-white px-3 py-4">
        <button
          onClick={() => router.history.back()}
          className="absolute left-3 p-1.5"
          aria-label="Voltar"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-base font-bold text-foreground">Minha Conta</h1>
      </header>

      <div className="h-3 bg-[oklch(0.96_0_0)]" />

      <main className="bg-white px-6 py-8">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <UserIcon className="h-16 w-16" strokeWidth={1.75} />
          <h2 className="mt-4 text-2xl font-extrabold text-foreground">
            Acessar Minha Conta
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Digite seu email ou CPF para continuar
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 w-full"
          >
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Email ou CPF
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="exemplo@email.com ou 000.000.000-00"
              className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm outline-none focus:border-[#FF3B30]"
            />

            <button
              type="submit"
              className="mt-5 h-12 w-full rounded-lg bg-[#E94B5F] text-base font-bold text-white"
            >
              Entrar
            </button>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Não tem uma conta? Faça sua primeira compra!
            </p>

            <Link
              to="/"
              className="mt-3 flex h-12 w-full items-center justify-center rounded-lg border-2 border-[#E94B5F] text-base font-bold text-[#E94B5F]"
            >
              Ir para a Loja
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
