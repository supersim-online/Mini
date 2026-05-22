import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  User,
  Home,
  Star,
  Plus,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ChatModal from "@/components/product/ChatModal";
import storeAvatar from "@/assets/mini-paredao-store-avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mini Paredão BR — Catálogo" },
      {
        name: "description",
        content:
          "Confira nossa coleção de Mini Paredões Bluetooth com luzes LED, graves potentes e frete grátis.",
      },
      { property: "og:title", content: "Mini Paredão BR — Catálogo" },
      {
        property: "og:description",
        content:
          "Mini Paredões Bluetooth com luzes LED, graves potentes e frete grátis.",
      },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [following, setFollowing] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [redeemed1, setRedeemed1] = useState(false);
  const [redeemed2, setRedeemed2] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "produtos">("home");


  const totalSold = PRODUCTS.reduce((acc, p) => {
    const n = parseInt(p.sold.replace(/\D/g, ""), 10);
    return acc + (isNaN(n) ? 0 : n);
  }, 0);

  const cheapest = [...PRODUCTS].sort(
    (a, b) => parseFloat(a.priceNumeric.replace(",", ".")) - parseFloat(b.priceNumeric.replace(",", "."))
  )[0];

  return (
    <div className="min-h-screen bg-[oklch(0.97_0_0)] pb-24">
      {/* Top header */}
      <header className="sticky top-0 z-30 flex items-center gap-2 bg-white px-3 py-2 shadow-sm">
        <button className="p-1.5" aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="h-9 w-full rounded-full bg-[oklch(0.96_0_0)] pl-9 pr-3 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-brand/40"
            placeholder="Pesquisar"
          />
        </div>
        <Link to="/conta" className="p-1.5" aria-label="Conta">
          <User className="h-5 w-5" />
        </Link>

        <button className="relative p-1.5" aria-label="Carrinho">
          <ShoppingCart className="h-5 w-5" />
        </button>

      </header>

      {/* Store profile */}
      <section className="flex items-center gap-3 bg-white px-4 py-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-black">
          <img src={storeAvatar} alt="Mini Paredão BR" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-base font-bold text-foreground">Mini Paredão BR</h1>
          <p className="text-xs text-muted-foreground">
            {totalSold.toLocaleString("pt-BR")} vendido(s)
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => setFollowing((v) => !v)}
            className={
              following
                ? "rounded-md border border-border bg-[oklch(0.94_0_0)] px-4 py-1 text-xs font-semibold text-muted-foreground"
                : "rounded-md bg-[#FF3B30] px-4 py-1 text-xs font-bold text-white"
            }
          >
            {following ? "Seguindo" : "Seguir"}
          </button>
          <button
            onClick={() => setChatOpen(true)}
            className="rounded-md border border-border bg-white px-4 py-1 text-xs font-semibold text-foreground"
          >
            Mensagem
          </button>
        </div>
      </section>

      {/* Coupons */}
      <section className="flex gap-2 overflow-x-auto bg-white px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-[220px] flex-1 items-center justify-between rounded-md bg-[#E6F4F4] px-3 py-2">
          <div>
            <p className="text-xs font-bold text-[#0E8B8B]">Cupom de frete grátis</p>
            <p className="text-[10px] text-[#0E8B8B]/80">Sem gasto mínimo</p>
          </div>
          <button
            onClick={() => setRedeemed1((v) => !v)}
            className={
              redeemed1
                ? "rounded bg-[#CDEAEA] px-3 py-1 text-[11px] font-bold text-[#0E8B8B]"
                : "rounded bg-[#1FB6B6] px-3 py-1 text-[11px] font-bold text-white"
            }
          >
            {redeemed1 ? "Resgatado" : "Resgatar"}
          </button>
        </div>
        <div className="flex min-w-[220px] flex-1 items-center justify-between rounded-md bg-[#FCE7EA] px-3 py-2">
          <div>
            <p className="text-xs font-bold text-[#D43A4F]">Até 93% OFF</p>
            <p className="text-[10px] text-[#D43A4F]/80">Em produtos selecionados</p>
          </div>
          <button
            onClick={() => setRedeemed2((v) => !v)}
            className={
              redeemed2
                ? "rounded bg-[#CDEAEA] px-3 py-1 text-[11px] font-bold text-[#0E8B8B]"
                : "rounded bg-[#1FB6B6] px-3 py-1 text-[11px] font-bold text-white"
            }
          >
            {redeemed2 ? "Resgatado" : "Resgatar"}
          </button>
        </div>
      </section>

      {/* Tabs */}
      <nav className="flex border-b border-border bg-white">
        <button
          onClick={() => setActiveTab("home")}
          className={`relative flex-1 py-3 text-sm ${activeTab === "home" ? "font-bold text-foreground" : "font-medium text-muted-foreground"}`}
        >
          Página inicial
          {activeTab === "home" && (
            <span className="absolute inset-x-8 bottom-0 h-0.5 rounded bg-[#FF3B30]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("produtos")}
          className={`relative flex-1 py-3 text-sm ${activeTab === "produtos" ? "font-bold text-foreground" : "font-medium text-muted-foreground"}`}
        >
          Produtos
          {activeTab === "produtos" && (
            <span className="absolute inset-x-8 bottom-0 h-0.5 rounded bg-[#FF3B30]" />
          )}
        </button>
      </nav>


      {/* Sort */}
      <div className="flex items-center justify-center gap-4 bg-white py-2.5 text-xs">
        <span className="font-bold text-foreground">Todos</span>
        <span className="text-muted-foreground/40">|</span>
        <span className="text-muted-foreground">Relevância</span>
      </div>

      {/* Main products */}
      <section className="mt-2 bg-white px-3 py-3">
        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-foreground">
            {activeTab === "home" ? "Principais produtos" : "Todos os produtos"}
          </h2>
          <span className="text-xs text-muted-foreground">›</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/produto/$slug"
              params={{ slug: p.slug }}
              className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border/60 transition active:scale-[0.98]"
            >
              {activeTab === "home" && (
                <span className="absolute left-2 top-2 z-10 rounded bg-[#1a1a1a] px-2 py-0.5 text-[10px] font-bold text-white">
                  TOP {i + 1}
                </span>
              )}

              <div className="aspect-square w-full overflow-hidden bg-[oklch(0.96_0_0)]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-2">
                <h3 className="line-clamp-2 text-xs leading-snug text-foreground">
                  {p.name}
                </h3>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[10px] font-semibold text-[#FF3B30]">R$</span>
                  <span className="text-lg font-extrabold leading-none text-[#FF3B30]">
                    {p.priceNumeric}
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground line-through">
                  {p.oldPrice}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="rounded-sm bg-[#FCE7EA] px-1 py-0.5 text-[10px] font-bold text-[#FF3B30]">
                    {p.discountPercent}
                  </span>
                  <span className="text-[10px] font-semibold text-[#1FB6B6]">
                    Frete grátis
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Star className="h-3 w-3 fill-[#FFB400] text-[#FFB400]" />
                  <span className="font-semibold text-foreground">{p.rating}</span>
                  <span>({p.reviewsCount})</span>
                  <span>·</span>
                  <span>{p.sold}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />

    </div>
  );
}
