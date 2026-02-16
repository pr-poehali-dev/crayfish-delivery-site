import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const districts = [
  { name: "Центральный", price: 0, time: "40-60 мин" },
  { name: "Ленинский", price: 150, time: "50-70 мин" },
  { name: "Кировский", price: 200, time: "60-80 мин" },
  { name: "Советский", price: 200, time: "60-80 мин" },
  { name: "Заводской", price: 250, time: "70-90 мин" },
  { name: "Октябрьский", price: 300, time: "80-100 мин" },
  { name: "Фрунзенский", price: 300, time: "80-100 мин" },
  { name: "Пригород", price: 500, time: "90-120 мин" },
];

const DeliveryCalculator = () => {
  const [selected, setSelected] = useState<string>("");

  const district = districts.find((d) => d.name === selected);

  return (
    <section id="delivery" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Калькулятор доставки
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Выберите район — мы рассчитаем стоимость и время
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-accent" />
                </div>
                <span className="font-medium text-lg">Ваш район</span>
              </div>

              <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Выберите район доставки" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((d) => (
                    <SelectItem key={d.name} value={d.name}>
                      {d.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {district && (
                <div className="mt-6 animate-fade-in">
                  <div className="rounded-xl bg-secondary/60 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Banknote" size={18} />
                        <span>Стоимость доставки</span>
                      </div>
                      <span className="text-xl font-bold text-foreground">
                        {district.price === 0 ? "Бесплатно" : `${district.price}₽`}
                      </span>
                    </div>

                    <div className="w-full h-px bg-border" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={18} />
                        <span>Время доставки</span>
                      </div>
                      <span className="text-xl font-bold text-foreground">{district.time}</span>
                    </div>
                  </div>

                  {district.price === 0 && (
                    <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 rounded-lg px-4 py-2.5">
                      <Icon name="Gift" size={18} />
                      <span className="text-sm font-medium">
                        Бесплатная доставка в центральный район!
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <Icon name="Info" size={16} className="mt-0.5 shrink-0" />
                  Бесплатная доставка при заказе от 3 000₽ в любой район города
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCalculator;
