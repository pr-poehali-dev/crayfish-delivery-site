import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  onBook: (car: Car) => void;
}

const categoryColors: Record<string, string> = {
  "Эконом": "bg-green-100 text-green-700",
  "Комфорт": "bg-blue-100 text-blue-700",
  "Премиум": "bg-purple-100 text-purple-700",
  "Кроссовер": "bg-orange-100 text-orange-700",
};

const CarCard = ({ car, onBook }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryColors[car.category] || "bg-gray-100 text-gray-700"} border-0 font-medium`}>
            {car.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-heading font-bold text-lg mb-1">{car.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{car.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon name="Calendar" size={13} />
            <span>{car.specs.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon name="Cog" size={13} />
            <span>{car.specs.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon name="Fuel" size={13} />
            <span>{car.specs.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon name="Users" size={13} />
            <span>{car.specs.seats} мест</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div>
            <span className="text-xl font-bold">{car.pricePerDay.toLocaleString("ru-RU")}₽</span>
            <span className="text-muted-foreground text-sm ml-1">/ сутки</span>
          </div>
          <Button size="sm" onClick={() => onBook(car)}>
            Забронировать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
