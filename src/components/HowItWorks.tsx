import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Search" as const,
    title: "Выберите авто",
    desc: "Подберите машину из нашего каталога по классу и бюджету",
  },
  {
    icon: "CalendarCheck" as const,
    title: "Укажите даты",
    desc: "Выберите период аренды — стоимость рассчитается автоматически",
  },
  {
    icon: "FileCheck" as const,
    title: "Оформите бронь",
    desc: "Заполните короткую форму — мы перезвоним за 15 минут",
  },
  {
    icon: "CarFront" as const,
    title: "Получите авто",
    desc: "Подадим машину в удобное место в течение 60 минут",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Как арендовать</h2>
          <p className="text-muted-foreground text-lg">4 простых шага до вашего автомобиля</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <Icon name={step.icon} size={28} className="text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
