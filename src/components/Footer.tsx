import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-foreground text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Car" size={20} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">МосДрайв</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Автопрокат в Москве с 2020 года. Более 15 автомобилей от эконом до премиум-класса.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@mosdrive.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Icon name="Mail" size={16} />
                info@mosdrive.ru
              </a>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="MapPin" size={16} />
                Москва, ул. Тверская, д. 1
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Режим работы</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Ежедневно 08:00 — 22:00
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CarFront" size={16} />
                Подача авто за 60 минут
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                КАСКО и ОСАГО включены
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 МосДрайв. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
