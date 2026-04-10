export function RatingStars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className={`inline-flex items-center gap-0.5 ${sizeClass}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`full-${i}`} className="text-amber-500">&#9733;</span>
      ))}
      {hasHalf && <span className="text-amber-500">&#9734;</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`empty-${i}`} className="text-zinc-300">&#9734;</span>
      ))}
    </span>
  );
}
