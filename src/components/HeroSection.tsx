import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg"
          alt="Автопрокат в Москве"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <Icon name="MapPin" size={14} className="text-accent" />
            <span className="text-white/90 text-sm font-medium">Москва и область</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Аренда авто<br />
            <span className="text-accent">без лишних хлопот</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            От эконом до премиум-класса. Подача за 60 минут, оформление за 15 минут, без скрытых платежей.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#catalog">
              <Button size="lg" className="text-base px-8 w-full sm:w-auto">
                <Icon name="Search" size={20} />
                <span className="ml-2">Выбрать авто</span>
              </Button>
            </a>
            <a href="tel:+74951234567">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <Icon name="Phone" size={20} />
                <span className="ml-2">Позвонить</span>
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/50 text-sm">автомобилей</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="text-2xl font-bold text-white">от 2 400₽</div>
              <div className="text-white/50 text-sm">в сутки</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="text-2xl font-bold text-white">60 мин</div>
              <div className="text-white/50 text-sm">подача авто</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
