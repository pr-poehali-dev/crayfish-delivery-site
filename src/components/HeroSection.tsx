import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/da704abb-0faa-4998-823a-345f5dd8dc87.jpg"
          alt="Свежие раки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Доставляем прямо сейчас</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Свежие раки<br />
            <span className="text-primary-foreground/80">с доставкой до двери</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl mb-8 leading-relaxed">
            Живые и варёные раки от проверенных поставщиков. Доставка по городу от 60 минут.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="text-base px-8"
              onClick={() => onNavigate("catalog")}
            >
              <Icon name="ShoppingBag" size={20} />
              <span className="ml-2">Выбрать раков</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 bg-white/10 border-white/25 text-white hover:bg-white/20"
              onClick={() => onNavigate("delivery")}
            >
              <Icon name="Calculator" size={20} />
              <span className="ml-2">Рассчитать доставку</span>
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">60 мин</div>
              <div className="text-white/60 text-sm">доставка</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">от 990₽</div>
              <div className="text-white/60 text-sm">за кг</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9 ★</div>
              <div className="text-white/60 text-sm">рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
