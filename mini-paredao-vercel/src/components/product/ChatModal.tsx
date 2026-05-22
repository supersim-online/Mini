import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ShoppingCart, Send } from "lucide-react";
import logo from "@/assets/mini-paredao-logo.png";

type Msg = { from: "bot" | "user"; text: string; time: string };

const FAQS: { q: string; a: string }[] = [
  {
    q: "Como faço meu pedido?",
    a: "É super simples! Escolha o produto, clique em 'Comprar agora', preencha seus dados de entrega e finalize o pagamento. 🛒",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo médio de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua região. 📦",
  },
  {
    q: "Como funciona a troca/devolução?",
    a: "Você tem até 7 dias após o recebimento para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor. 🔄",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Aceitamos PIX (com desconto), cartão de crédito em até 12x e boleto bancário. 💳",
  },
  {
    q: "Como rastrear meu pedido?",
    a: "Assim que seu pedido for enviado, você receberá o código de rastreio por e-mail e SMS. 📮",
  },
  {
    q: "Como entrar na minha conta?",
    a: "Clique em 'Entrar' no topo da página e use seu e-mail e senha cadastrados. 👤",
  },
  {
    q: "Falar com atendente",
    a: "Um de nossos atendentes entrará em contato em instantes. Por favor, descreva sua dúvida. 💬",
  },
];

function nowTime() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export default function ChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Olá! Bem-vindo à Mini Paredão BR. Como posso ajudar você hoje?",
      time: nowTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [showFaqs, setShowFaqs] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function sendBot(text: string) {
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text, time: nowTime() }]);
    }, 600);
  }

  function handleFaq(item: { q: string; a: string }) {
    setMessages((m) => [...m, { from: "user", text: item.q, time: nowTime() }]);
    setShowFaqs(false);
    sendBot(item.a);
    setTimeout(() => setShowFaqs(true), 1400);
  }

  function handleSend() {
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t, time: nowTime() }]);
    setInput("");
    sendBot(
      "Obrigado pela sua mensagem! Um de nossos atendentes responderá em breve. ⏱️"
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#f4f5f7]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-white px-4 py-3">
        <button onClick={onClose} aria-label="Voltar" className="text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-brand">Chat</h1>
        <button aria-label="Carrinho" className="text-foreground">
          <ShoppingCart className="h-5 w-5" />
        </button>
      </header>

      {/* Store row */}
      <div className="flex items-center gap-3 border-b border-border bg-white px-4 py-3">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md bg-white">
          <img src={logo} alt="Mini Paredão BR" className="h-full w-full object-contain" />
        </div>
        <div>
          <div className="text-sm font-semibold">Mini Paredão BR</div>
          <div className="text-xs text-emerald-600">Online</div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                m.from === "user"
                  ? "rounded-br-sm bg-brand text-white"
                  : "rounded-bl-sm bg-white text-foreground"
              }`}
            >
              <p className="whitespace-pre-line">{m.text}</p>
              <div
                className={`mt-1 text-right text-[10px] ${
                  m.from === "user" ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {m.time}
              </div>
            </div>
          </div>
        ))}

        {showFaqs && (
          <div className="space-y-2 pt-2">
            <p className="px-1 text-xs font-medium text-muted-foreground">
              Dúvidas frequentes:
            </p>
            {FAQS.map((f) => (
              <button
                key={f.q}
                onClick={() => handleFaq(f)}
                className="block w-full rounded-lg border-2 border-brand bg-white px-4 py-2.5 text-left text-sm text-foreground transition active:scale-[0.99] hover:bg-brand-soft"
              >
                {f.q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite uma mensagem..."
          className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm outline-none focus:border-brand"
        />
        <button
          onClick={handleSend}
          aria-label="Enviar"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
            input.trim() ? "bg-brand text-white" : "bg-muted text-muted-foreground"
          }`}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
