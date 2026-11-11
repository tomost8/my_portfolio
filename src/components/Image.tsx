import { cn } from "@/lib/cn";

type ImageProps = {
  src: string;
  alt: string;
  /** Cover the nearest positioned parent, matching the old fill images. */
  fill?: boolean;
  /** Load immediately for images that sit in the first view. */
  priority?: boolean;
  className?: string;
};

/** Plain image with the cover layout previously provided by next/image. */
export function Image({ src, alt, fill = false, priority = false, className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn(fill && "absolute inset-0 size-full object-cover", className)}
    />
  );
}
