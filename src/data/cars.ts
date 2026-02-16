export interface Car {
  id: number;
  name: string;
  category: string;
  pricePerDay: number;
  image: string;
  description: string;
  specs: {
    year: number;
    transmission: string;
    fuel: string;
    seats: number;
    engine: string;
  };
}

export const defaultCars: Car[] = [
  {
    id: 1,
    name: "Kia Rio",
    category: "Эконом",
    pricePerDay: 2500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Надёжный городской седан — идеален для ежедневных поездок по Москве. Экономичный расход топлива и компактные размеры.",
    specs: { year: 2023, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "1.6 л, 123 л.с." },
  },
  {
    id: 2,
    name: "Hyundai Solaris",
    category: "Эконом",
    pricePerDay: 2400,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Популярный бюджетный седан с просторным салоном. Отлично подходит для длительной аренды.",
    specs: { year: 2023, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "1.6 л, 123 л.с." },
  },
  {
    id: 3,
    name: "Volkswagen Polo",
    category: "Эконом",
    pricePerDay: 2700,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Немецкое качество в компактном формате. Отличная управляемость и комфортный салон.",
    specs: { year: 2023, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "1.6 л, 110 л.с." },
  },
  {
    id: 4,
    name: "Toyota Camry",
    category: "Комфорт",
    pricePerDay: 4500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Бизнес-седан для тех, кто ценит комфорт. Просторный салон, плавный ход, богатое оснащение.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.5 л, 200 л.с." },
  },
  {
    id: 5,
    name: "Kia K5",
    category: "Комфорт",
    pricePerDay: 4200,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Стильный седан бизнес-класса с современными технологиями и динамичным дизайном.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.5 л, 194 л.с." },
  },
  {
    id: 6,
    name: "Mazda 6",
    category: "Комфорт",
    pricePerDay: 4000,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Элегантный японский седан с выразительным дизайном. Динамичен и управляем.",
    specs: { year: 2023, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.5 л, 194 л.с." },
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    category: "Коммерческий",
    pricePerDay: 9500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Флагман комфорта и престижа. Роскошный салон, передовые технологии и безупречный стиль.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 258 л.с." },
  },
  {
    id: 8,
    name: "BMW 5 Series",
    category: "Коммерческий",
    pricePerDay: 9000,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Спортивный характер в сочетании с представительской роскошью. Идеален для деловых поездок.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 245 л.с." },
  },
  {
    id: 9,
    name: "Audi A6",
    category: "Коммерческий",
    pricePerDay: 8500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Воплощение прогресса через технологии. Полный привод quattro и цифровая кабина.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 245 л.с." },
  },
  {
    id: 10,
    name: "Toyota RAV4",
    category: "Кроссовер",
    pricePerDay: 5000,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Универсальный кроссовер для города и загорода. Вместительный багажник, полный привод.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 150 л.с." },
  },
  {
    id: 11,
    name: "Kia Sportage",
    category: "Кроссовер",
    pricePerDay: 4500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Современный кроссовер с ярким дизайном и богатым оснащением. Полный привод и просторный салон.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 150 л.с." },
  },
  {
    id: 12,
    name: "Hyundai Tucson",
    category: "Кроссовер",
    pricePerDay: 4800,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Футуристичный дизайн и передовые технологии. Комфортная подвеска для любых дорог.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 150 л.с." },
  },
  {
    id: 13,
    name: "Mercedes-Benz GLE",
    category: "Коммерческий",
    pricePerDay: 12000,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Люксовый полноразмерный SUV. Максимальный комфорт, мощный двигатель, полный привод.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.0 л, 258 л.с." },
  },
  {
    id: 14,
    name: "Skoda Octavia",
    category: "Комфорт",
    pricePerDay: 3500,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Практичный лифтбек с огромным багажником. Немецкое качество по доступной цене.",
    specs: { year: 2023, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "1.4 л, 150 л.с." },
  },
  {
    id: 15,
    name: "Genesis G80",
    category: "Коммерческий",
    pricePerDay: 10000,
    image: "https://cdn.poehali.dev/projects/b5543c12-068b-408f-91fc-77a9bfe8de0a/files/93c148c9-935b-4ea6-8c40-7d7a1feac0d2.jpg",
    description: "Корейский премиум-седан, конкурирующий с немецкой тройкой. Роскошь, тишина и мощь.",
    specs: { year: 2024, transmission: "АКПП", fuel: "Бензин", seats: 5, engine: "2.5 л, 300 л.с." },
  },
];