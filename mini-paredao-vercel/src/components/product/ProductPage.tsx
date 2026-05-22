import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import ChatModal from "./ChatModal";
import {
  ArrowLeft,
  Search,
  User,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  Check,
  ChevronRight,
  Store,
  MessageCircle,
  Zap,
  Eye,
  Flame,
} from "lucide-react";
import { Gallery } from "./Gallery";
import { CountdownTimer } from "./CountdownTimer";
import { ReviewCard } from "./ReviewCard";
import { RelatedProductCard } from "./RelatedProductCard";
import { PRODUCTS, type Product } from "@/data/products";

import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";
import review7 from "@/assets/review-7.png";

const REVIEWS = [
  {
    name: "rsimplicio",
    date: "2025-10-26 02:14",
    variation: "PRETO",
    text: "Sem palavras pra descrever a qualidade dessa caixa um espetáculo. Entrega chegou muito antes do prazo. Recomendo comprei sem medo",
    photos: [review1, review5, review7],
  },
  {
    name: "sidneisanche",
    date: "2025-07-08 10:37",
    variation: "PRETO",
    text: "Caixa muito boa excelente. Super recomendo, chegou na data prevista",
    photos: [review2, review3],
  },
  {
    name: "danijds3",
    date: "2025-07-02 13:21",
    variation: "PRETO",
    text: "Perfeita, muitooo alta, parabens ao vendedor veio muito rapido e muito bem embalada, meu namorado comprou pra ele, mil vezes melhor que jbl, amamos",
    photos: [review6, review4],
  },
  {
    name: "felipetiger",
    date: "2025-06-30 13:21",
    variation: "PRETO",
    text: "Boa tarde, chegou bem embalado e rápido qualidade ótima gostei muito obrigado 👍🏼",
    photos: [review5],
  },
];

const RELATED = [
  {
    img: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9zqs2hxtuki59",
    title: "Micro-ondas Mondial Mo-01-21-e 1200w 21 Litros",
    price: "R$ 84,90",
    oldPrice: "R$ 389,90",
    discount: "78% OFF",
    sold: "8953 vendido(s)",
  },
  {
    img: "https://down-br.img.susercontent.com/file/sg-11134201-7raui-mb4awu05e15c16",
    title: "Fritadeira Air Fryer Forno Oven 12L Mondial Preto e Inox",
    price: "R$ 69,90",
    oldPrice: "R$ 397,90",
    discount: "82% OFF",
    sold: "8391 vendido(s)",
  },
  {
    img: "https://down-br.img.susercontent.com/file/sg-11134201-7rd5p-m7uwvu85tnp9ae",
    title: "Aparelho de Jantar/Chá Oxford Ryo Maresia 30 Peças",
    price: "R$ 79,90",
    oldPrice: "R$ 497,90",
    discount: "84% OFF",
    sold: "7643 vendido(s)",
  },
  {
    img: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhqna6evm0oz72",
    title: "Kit Mochila Rebecca Bonbon - Lancheira Térmica + Estojo",
    price: "R$ 69,90",
    oldPrice: "R$ 489,90",
    discount: "86% OFF",
    sold: "12569 vendido(s)",
  },
  {
    img: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhuv620f45j7bf",
    title: "Kit Praia 4 Cadeiras Reclinável + Guarda Sol + Carrinho",
    price: "R$ 129,90",
    oldPrice: "R$ 699,00",
    discount: "81% OFF",
    sold: "10706 vendido(s)",
  },
  {
    img: "https://down-br.img.susercontent.com/file/sg-11134201-7renf-m8lxuc60fdsy07",
    title: "Ar Condicionado Portátil HQ 8.500 BTU/h Frio",
    price: "R$ 92,80",
    oldPrice: "R$ 754,44",
    discount: "88% OFF",
    sold: "Frete grátis",
  },
];

export function ProductPage({ product }: { product: Product }) {
  const [viewers, setViewers] = useState(15);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setViewers((v) => Math.max(8, Math.min(32, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0_0)] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center gap-2 bg-white px-3 py-2 shadow-sm">
        <Link to="/" className="p-1.5" aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-9 w-full rounded-full bg-[oklch(0.96_0_0)] pl-9 pr-3 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-brand/40"
            placeholder="Pesquisar"
          />
        </div>
        <button className="p-1.5" aria-label="Conta">
          <User className="h-5 w-5" />
        </button>
        <button className="relative p-1.5" aria-label="Carrinho">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-brand-foreground">
            1
          </span>
        </button>
      </header>

      {/* Gallery */}
      <Gallery images={[product.image]} />

      {/* Flash sale price banner */}
      <section className="relative overflow-hidden bg-[#FF6A2A] px-4 py-3 text-white">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="rounded bg-white px-1.5 py-0.5 text-xs font-bold text-[#FF6A2A]">
                {product.discount}
              </span>
              <span className="text-xs font-semibold">R$</span>
              <span className="text-3xl font-extrabold leading-none tracking-tight">{product.priceNumeric}</span>
            </div>
            <div className="mt-1 text-xs text-white/90 line-through">{product.oldPrice}</div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 text-sm font-bold">
              <Zap className="h-4 w-4 fill-white" />
              Oferta Relâmpago
            </div>
            <div className="mt-0.5 text-xs">
              Termina em <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Title block */}
      <section className="mt-2 bg-white px-4 py-3">
        <span className="inline-flex items-center gap-1 rounded bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand">
          <Flame className="h-3 w-3" /> {product.discountPercent}
        </span>
        <h1 className="mt-2 text-base font-medium leading-snug text-foreground">
          {product.name}
        </h1>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            <span className="font-semibold text-foreground">{product.rating}</span>
            <span>({product.reviewsCount})</span>
          </span>
          <span className="h-3 w-px bg-border" />
          <span>{product.sold}</span>
        </div>
      </section>

      {/* Shipping */}
      <section className="mt-2 bg-white px-4 py-3">
        <div className="flex items-start gap-3">
          <Truck className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
          <div className="text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-success/15 px-1.5 py-0.5 text-xs font-semibold text-success">
                Frete grátis
              </span>
              <span className="text-muted-foreground">Receba até 24 de maio</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Taxa de envio:{" "}
              <span className="line-through">R$ 14,60</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live viewers */}
      <section className="mt-2 bg-white px-4 py-3">
        <div className="flex items-center justify-center gap-3 rounded-md bg-brand-soft px-3 py-2 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <Eye className="h-3.5 w-3.5 text-brand" />
            <span>
              <b className="text-brand">{viewers}</b> pessoas olhando
            </span>
          </span>
          <span className="h-3 w-px bg-brand/30" />
          <span>
            Restam <b className="text-brand">7</b> unidades
          </span>
        </div>
      </section>

      {/* Protection */}
      <section className="mt-2 bg-white px-4 py-3">
        <h3 className="flex items-center gap-1.5 text-sm font-semibold">
          <ShieldCheck className="h-4 w-4 text-[oklch(0.55_0.13_60)]" />
          <span className="text-[oklch(0.45_0.13_60)]">Proteção do cliente</span>
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs text-foreground/80">
          {[
            "Devolução gratuita",
            "Reembolso automático por danos",
            "Pagamento seguro",
            "Cupom por atraso na coleta",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-success" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="mt-2 bg-white px-4 py-4">
        <h2 className="text-base font-semibold">Descrição</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
          <p className="font-bold">🔥 MINI PAREDÃO BLUETOOTH 🔥</p>
          <p>
            Leve a potência do som automotivo para qualquer lugar com esse
            incrível Mini Paredão personalizado! Compacto, moderno e cheio de
            estilo, ele é perfeito para quem ama música com grave forte e
            iluminação LED diferenciada.
          </p>

          <ul className="space-y-1">
            <li>✅ Conexão Bluetooth</li>
            <li>✅ Luzes LED coloridas</li>
            <li>✅ Entrada USB e cartão de memória</li>
            <li>✅ Controle de volume e efeitos</li>
            <li>✅ Design exclusivo estilo paredão automotivo</li>
            <li>✅ Som potente e de alta qualidade</li>
            <li>✅ Recarregável e portátil</li>
          </ul>

          <p>
            Ideal para presentear, decorar ambientes ou curtir aquele som com os
            amigos. Mesmo sendo mini, entrega presença e visual impressionante.
            🚀🔊
          </p>

          <ul className="space-y-1">
            <li>📦 Produto artesanal com acabamento premium</li>
            <li>🎶 Compatível com celular Android e iPhone</li>
            <li>⚡ Fácil de usar e transportar</li>
          </ul>

          <p>
            Garanta já o seu Mini Paredão e transforme qualquer lugar em uma
            verdadeira resenha!
          </p>

          <div className="rounded-md bg-[oklch(0.97_0_0)] p-3">
            <p className="mb-3 font-bold">Detalhes Técnicos</p>
            <div className="space-y-3 text-xs">
              {[
                {
                  title: "🔊 Sistema de Som",
                  items: [
                    "Alto-falantes miniatura com áudio potente",
                    "Graves reforçados e som estéreo",
                    "Ideal para ambientes internos e externos",
                  ],
                },
                {
                  title: "📶 Conectividade",
                  items: [
                    "Bluetooth integrado",
                    "Compatível com Android e iPhone",
                    "Alcance sem fio de até 10 metros",
                  ],
                },
                {
                  title: "💾 Entradas Disponíveis",
                  items: [
                    "Entrada USB",
                    "Entrada para cartão Micro SD/TF",
                    "Entrada auxiliar (dependendo da versão)",
                  ],
                },
                {
                  title: "🔋 Bateria",
                  items: [
                    "Bateria recarregável integrada",
                    "Longa duração para reprodução contínua",
                    "Carregamento via cabo USB",
                  ],
                },
                {
                  title: "💡 Iluminação",
                  items: [
                    "LEDs RGB multicoloridos",
                    "Efeitos luminosos sincronizados com o som",
                    "Visual inspirado em paredões automotivos",
                  ],
                },
                {
                  title: "🎛️ Controles",
                  items: [
                    "Controle de volume",
                    "Botões multifunção",
                    "Painel frontal de fácil acesso",
                  ],
                },
                {
                  title: "🛠️ Construção",
                  items: [
                    "Estrutura resistente e acabamento premium",
                    "Design artesanal estilizado",
                    "Rodinhas decorativas estilo carreta/paredão",
                  ],
                },
                {
                  title: "📏 Dimensões Aproximadas",
                  items: ["Compacto e portátil", "Fácil transporte e armazenamento"],
                },
                {
                  title: "⚡ Alimentação",
                  items: ["Recarregável via USB", "Baixo consumo de energia"],
                },
                {
                  title: "📦 Conteúdo da Embalagem",
                  items: [
                    "1 Mini Paredão Bluetooth",
                    "1 Cabo USB para carregamento",
                    "Manual básico de utilização",
                  ],
                },
                {
                  title: "🎶 Indicação de Uso",
                  items: [
                    "Festas",
                    "Decoração",
                    "Presentes",
                    "Colecionadores",
                    "Som ambiente e lazer",
                  ],
                },
              ].map((group) => (
                <div key={group.title}>
                  <p className="font-semibold text-foreground">{group.title}</p>
                  <ul className="mt-1 space-y-0.5 pl-3 text-muted-foreground">
                    {group.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-2 bg-white px-4 py-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-base font-semibold">Avaliações dos clientes ({product.reviewsCount})</h2>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-2xl font-bold text-brand">4.9</span>
          <span className="text-sm text-muted-foreground">/ 5</span>
          <div className="ml-1 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
            ))}
          </div>
        </div>

        <div className="mt-4 divide-y divide-border">
          {REVIEWS.map((r, idx) => (
            <ReviewCard
              key={r.name}
              {...r}
              photos={product.reviewPhotos?.[idx] ?? r.photos}
            />
          ))}
        </div>

        <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-md border border-border bg-white py-2.5 text-sm font-medium text-foreground hover:bg-muted">
          Ver mais avaliações (49 restantes)
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>

      {/* Related */}
      <section className="mt-2 bg-white px-4 py-4">
        <h2 className="text-base font-semibold">Você também pode gostar</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {PRODUCTS.filter((p) => p.slug !== product.slug).map((p) => (
            <Link
              key={p.slug}
              to="/produto/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-white transition hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden bg-[oklch(0.97_0_0)]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-2">
                <p className="line-clamp-2 text-xs leading-snug text-foreground">{p.name}</p>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-sm font-bold text-brand">{p.price}</span>
                  <span className="text-[10px] text-muted-foreground line-through">{p.oldPrice}</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="rounded bg-brand-soft px-1 py-0.5 font-semibold text-brand">
                    {p.discountPercent}
                  </span>
                  <span className="text-muted-foreground">{p.sold}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-white px-2 py-2 shadow-[0_-4px_12px_oklch(0_0_0/0.06)]">
        <Link to="/" className="flex flex-col items-center gap-0.5 px-2 text-[10px] text-muted-foreground">
          <Store className="h-5 w-5" />
          <span>Loja</span>
        </Link>
        <button
          onClick={() => setChatOpen(true)}
          className="flex flex-col items-center gap-0.5 px-2 text-[10px] text-muted-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Chat</span>
        </button>
        <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <a
          href={product.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex h-11 flex-1 flex-col items-center justify-center rounded-md bg-[#FF6A2A] text-white shadow-md transition active:scale-[0.98]"
        >
          <span className="text-sm font-bold leading-none">{product.price}</span>
          <span className="mt-0.5 text-[10px] leading-none opacity-95">
            Comprar agora | Frete grátis
          </span>
        </a>
      </div>

      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
