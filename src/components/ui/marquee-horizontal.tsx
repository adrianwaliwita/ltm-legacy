import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
import Image from "next/image";

// ItemCard component to display individual items
const ItemCard = ({ img, alt }: { img: string; alt?: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[50vw] h-[50vw] md:w-[20vw] md:h-[20vw] cursor-pointer overflow-hidden rounded-xl",
        "hover:scale-105 transition-transform duration-300"
      )}
    >
      <Image 
        src={img} 
        alt={alt || "Team member"}
        fill
        className="object-cover"
      />
    </figure>
  );
};

// MarqueeDemo component to accept `items` as a prop
export default function MarqueeHorizontal({ items }: { items: Array<{ img: string; alt?: string }> }) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:80s]">
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
}