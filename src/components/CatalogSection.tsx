import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import CarCard from "@/components/CarCard";
import type { Car } from "@/data/cars";

const categories = ["Все", "Эконом", "Комфорт", "Кроссовер", "Коммерческий"];

interface CatalogSectionProps {
  cars: Car[];
  onBook: (car: Car) => void;
}

const CatalogSection = ({ cars, onBook }: CatalogSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = useMemo(() => {
    if (activeCategory === "Все") return cars;
    return cars.filter((c) => c.category === activeCategory);
  }, [cars, activeCategory]);

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Наш автопарк</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {cars.length} автомобилей на выбор — от городских малолитражек до представительских седанов
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} onBook={onBook} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Нет автомобилей в этой категории
          </p>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;