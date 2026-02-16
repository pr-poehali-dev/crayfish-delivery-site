import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Алексей М.",
    rating: 5,
    text: "Заказывал крупных живых раков на день рождения. Привезли вовремя, все живые и активные. Сварили сами — вкус потрясающий! Обязательно закажу ещё.",
    date: "2 дня назад",
  },
  {
    id: 2,
    name: "Ольга К.",
    rating: 5,
    text: "Набор «На компанию» — это что-то! Соусы идеально подобраны, хлеб свежий. Муж в восторге, теперь заказываем каждые выходные.",
    date: "5 дней назад",
  },
  {
    id: 3,
    name: "Дмитрий В.",
    rating: 4,
    text: "Раки в пиве — просто бомба! Необычный вкус, чеснок и перец отлично дополняют. Доставили за 50 минут, хотя обещали час.",
    date: "1 неделю назад",
  },
  {
    id: 4,
    name: "Марина С.",
    rating: 5,
    text: "Первый раз заказывала раков с доставкой и не пожалела. Всё свежее, упаковка аккуратная. Калькулятор доставки — очень удобная штука.",
    date: "2 недели назад",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Отзывы</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Что говорят наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="border-border/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{review.name}</span>
                  <span className="text-muted-foreground text-xs">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
