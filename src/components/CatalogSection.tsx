import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  emoji: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Живые раки (мелкие)",
    description: "Идеальны для большой компании. Нежное мясо, яркий вкус",
    price: 990,
    weight: "1 кг",
    emoji: "🦞",
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "Живые раки (средние)",
    description: "Золотая середина — мясистые и сочные. Самый популярный размер",
    price: 1490,
    weight: "1 кг",
    emoji: "🦞",
  },
  {
    id: 3,
    name: "Живые раки (крупные)",
    description: "Отборные великаны для настоящих ценителей. Много мяса в каждом",
    price: 1990,
    weight: "1 кг",
    emoji: "🦞",
    badge: "Премиум",
  },
  {
    id: 4,
    name: "Варёные раки с укропом",
    description: "Классика — сварены с укропом, лавровым листом и специями",
    price: 1290,
    weight: "1 кг",
    emoji: "🍲",
  },
  {
    id: 5,
    name: "Раки в пиве",
    description: "Авторский рецепт — варёные в тёмном пиве с чесноком и перцем",
    price: 1590,
    weight: "1 кг",
    emoji: "🍺",
    badge: "Новинка",
  },
  {
    id: 6,
    name: "Набор «На компанию»",
    description: "3 кг варёных раков + соусы + лимоны + хлеб. На 4-6 человек",
    price: 4490,
    weight: "3 кг",
    emoji: "🎉",
  },
];

interface CatalogSectionProps {
  onAddToCart: (product: Product) => void;
}

const CatalogSection = ({ onAddToCart }: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Наши раки</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Только свежий улов — доставляем в день заказа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border/60"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{product.emoji}</span>
                  {product.badge && (
                    <Badge variant="secondary" className="bg-accent text-white border-0">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{product.price}₽</span>
                    <span className="text-muted-foreground text-sm ml-1">/ {product.weight}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => onAddToCart(product)}
                    className="group-hover:scale-105 transition-transform"
                  >
                    <Icon name="Plus" size={16} />
                    <span className="ml-1">В корзину</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
