interface ReviewCardProps {
  name: string;
  date: string;
  variation: string;
  text: string;
  photos: string[];
}

export function ReviewCard({ name, date, variation, text, photos }: ReviewCardProps) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="py-3">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
          {initial}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-[11px] text-muted-foreground">
            {date} · Variação: {variation}
          </span>
        </div>
      </div>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
        {text}
      </p>
      {photos.length > 0 && (
        <div className="mt-2 flex gap-1.5 overflow-x-auto">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Foto da avaliação ${i + 1}`}
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-md object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}
