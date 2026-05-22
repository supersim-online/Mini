interface RelatedProductCardProps {
  img: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  sold: string;
}

export function RelatedProductCard({
  img,
  title,
  price,
  oldPrice,
  discount,
  sold,
}: RelatedProductCardProps) {
  return (
    <a className="group flex flex-col overflow-hidden rounded-md border border-border bg-white transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-[oklch(0.97_0_0)]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-2">
        <p className="line-clamp-2 text-xs leading-snug text-foreground">{title}</p>
        <div className="mt-auto flex items-baseline gap-1">
          <span className="text-sm font-bold text-brand">{price}</span>
          <span className="text-[10px] text-muted-foreground line-through">
            {oldPrice}
          </span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="rounded bg-brand-soft px-1 py-0.5 font-semibold text-brand">
            {discount}
          </span>
          <span className="text-muted-foreground">{sold}</span>
        </div>
      </div>
    </a>
  );
}
