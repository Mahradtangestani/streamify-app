import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CategoryPillsProps = {
  categories: string[],
  selectedCategory: string,
  onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200;

const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {

  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target as HTMLDivElement;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    }
  }, [categories, translate]);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]" style={{ transform: `translateX(-${translate}px)` }}>
        {categories.map(category => (
          <button onClick={() => onSelect(category)} key={category} className={`py-1 px-3 rounded-lg whitespace-nowrap ${selectedCategory === category ? "bg-slate-800 text-white" : "bg-slate-200"}`}>
            {category}
          </button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <button onClick={() => {
            setTranslate(translate => {
              const newTranslate = translate - TRANSLATE_AMOUNT;
              return Math.max(0, newTranslate); // جلوگیری از رفتن به کمتر از صفر
            });
          }} className="h-full aspect-square w-auto p-1.5">
            <ChevronLeft />
          </button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <button onClick={() => {
            setTranslate(translate => {
              if (containerRef.current == null) {
                return translate;
              }
              const newTranslate = translate + TRANSLATE_AMOUNT;
              const edge = containerRef.current.scrollWidth;
              const width = containerRef.current.clientWidth;
              return Math.min(newTranslate, edge - width); // جلوگیری از عبور از لبه راست
            });
          }} className="h-full aspect-square w-auto p-1.5">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoryPills;
