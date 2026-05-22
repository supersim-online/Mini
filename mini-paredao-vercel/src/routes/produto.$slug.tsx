import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { ProductPage } from "@/components/product/ProductPage";
import { getProductBySlug } from "@/data/products";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return {};
    return {
      meta: [
        { title: `${product.name} — Mini Paredão BR` },
        {
          name: "description",
          content: `${product.name} por ${product.price}. Frete grátis e ${product.discountPercent}.`,
        },
        { property: "og:title", content: `${product.name} — Mini Paredão BR` },
        {
          property: "og:description",
          content: `${product.name} por ${product.price}. Frete grátis e ${product.discountPercent}.`,
        },
        { property: "og:image", content: product.image },
      ],
    };
  },
  component: ProductRoute,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function ProductRoute() {
  const { product } = Route.useLoaderData();
  return <ProductPage product={product} />;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-xl font-bold">Produto não encontrado</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Esse mini paredão não existe ou foi removido.
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-xl font-bold">Erro ao carregar produto</h1>
        <button
          onClick={() => {
            reset();
            router.invalidate();
          }}
          className="mt-3 rounded-md bg-[#FF6A2A] px-4 py-2 text-sm font-semibold text-white"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
