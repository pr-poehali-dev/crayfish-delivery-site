import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦞</span>
              <span className="font-serif font-bold text-xl text-white">РакоЛов</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Свежие раки с доставкой по городу. Работаем ежедневно с 10:00 до 22:00.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-2">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Icon name="Phone" size={16} />
                8 (800) 123-45-67
              </a>
              <a href="mailto:info@rakolov.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Icon name="Mail" size={16} />
                info@rakolov.ru
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Режим работы</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Ежедневно 10:00 — 22:00
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={16} />
                Доставка от 60 минут
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 РакоЛов. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
