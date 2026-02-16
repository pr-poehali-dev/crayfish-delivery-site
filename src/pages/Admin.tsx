import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import AdminCarEditor from "@/components/AdminCarEditor";
import type { Car } from "@/data/cars";
import useCars from "@/hooks/useCars";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { cars, updateCar, uploadImage, loading } = useCars();
  const [editCar, setEditCar] = useState<Car | null>(null);
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filtered = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = async (id: number, updates: Partial<Car>) => {
    try {
      await updateCar(id, updates);
      toast({ title: "Сохранено", description: "Изменения применены" });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось сохранить", variant: "destructive" });
    }
  };

  const handleQuickPrice = async (id: number, price: string) => {
    const num = Number(price);
    if (!isNaN(num) && num > 0) {
      try {
        await updateCar(id, { pricePerDay: num });
        toast({ title: "Цена обновлена" });
      } catch {
        toast({ title: "Ошибка", variant: "destructive" });
      }
    }
  };

  const handleUploadImage = async (carId: number, file: File) => {
    try {
      await uploadImage(carId, file);
      toast({ title: "Фото загружено" });
    } catch {
      toast({ title: "Ошибка загрузки фото", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Settings" size={20} className="text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Админ-панель</span>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm">
              <Icon name="Globe" size={16} />
              <span className="ml-1.5">На сайт</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold">
                Управление автопарком
              </h1>
              <p className="text-muted-foreground mt-1">
                {loading ? "Загрузка..." : `${cars.length} автомобилей`}
              </p>
            </div>
            <div className="relative w-full sm:w-72">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по авто..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((car) => (
              <Card key={car.id} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative group w-24 h-16 shrink-0">
                      {car.image ? (
                        <img src={car.image} alt={car.name} className="w-full h-full rounded-lg object-cover" />
                      ) : (
                        <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
                          <Icon name="ImageOff" size={20} className="text-muted-foreground" />
                        </div>
                      )}
                      <label className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                        <Icon name="Upload" size={16} className="text-white" />
                        <input
                          type="file"
                          accept=".png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleUploadImage(car.id, file);
                            e.target.value = "";
                          }}
                        />
                      </label>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold truncate">{car.name}</h3>
                        <Badge variant="secondary" className="text-xs shrink-0">{car.category}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm truncate">{car.description}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span>{car.specs.year}</span>
                        <span>•</span>
                        <span>{car.specs.transmission}</span>
                        <span>•</span>
                        <span>{car.specs.engine}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Input
                            type="number"
                            className="w-28 h-9 text-right font-bold"
                            defaultValue={car.pricePerDay}
                            onBlur={(e) => handleQuickPrice(car.id, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleQuickPrice(car.id, (e.target as HTMLInputElement).value);
                              }
                            }}
                          />
                          <span className="text-sm text-muted-foreground">₽/сут</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditCar(car)}
                      >
                        <Icon name="Pencil" size={14} />
                        <span className="ml-1.5 hidden sm:inline">Редактировать</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && !loading && (
            <div className="text-center py-16 text-muted-foreground">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-40" />
              <p>Ничего не найдено по запросу «{search}»</p>
            </div>
          )}
        </div>
      </div>

      <AdminCarEditor
        car={editCar}
        open={!!editCar}
        onClose={() => setEditCar(null)}
        onSave={handleSave}
        onUploadImage={handleUploadImage}
      />
    </div>
  );
};

export default Admin;
