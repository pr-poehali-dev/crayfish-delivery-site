import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import type { Car } from "@/data/cars";

interface AdminCarEditorProps {
  car: Car | null;
  open: boolean;
  onClose: () => void;
  onSave: (id: number, updates: Partial<Car>) => void;
}

const AdminCarEditor = ({ car, open, onClose, onSave }: AdminCarEditorProps) => {
  const [form, setForm] = useState<Partial<Car>>({});

  const currentCar = car ? { ...car, ...form } : null;
  if (!currentCar) return null;

  const handleSave = () => {
    if (!car) return;
    onSave(car.id, form);
    setForm({});
    onClose();
  };

  const handleClose = () => {
    setForm({});
    onClose();
  };

  const updateField = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateSpec = (field: string, value: unknown) => {
    setForm((prev) => ({
      ...prev,
      specs: { ...car!.specs, ...(prev.specs || {}), [field]: value },
    }));
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl flex items-center gap-2">
            <Icon name="Pencil" size={20} />
            Редактирование: {currentCar.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={currentCar.image}
              alt={currentCar.name}
              className="w-full h-48 object-cover"
            />
          </div>

          <div>
            <Label className="text-sm mb-1.5 block">URL фотографии</Label>
            <Input
              value={currentCar.image}
              onChange={(e) => updateField("image", e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm mb-1.5 block">Название</Label>
              <Input
                value={currentCar.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Категория</Label>
              <Select
                value={currentCar.category}
                onValueChange={(v) => updateField("category", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Эконом">Эконом</SelectItem>
                  <SelectItem value="Комфорт">Комфорт</SelectItem>
                  <SelectItem value="Кроссовер">Кроссовер</SelectItem>
                  <SelectItem value="Премиум">Премиум</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="text-sm mb-1.5 block">Описание</Label>
            <Textarea
              value={currentCar.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <Label className="text-sm mb-1.5 block">Цена за сутки (₽)</Label>
            <Input
              type="number"
              value={currentCar.pricePerDay}
              onChange={(e) => updateField("pricePerDay", Number(e.target.value))}
            />
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="font-heading font-semibold mb-3 flex items-center gap-2">
              <Icon name="Settings2" size={16} />
              Характеристики
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm mb-1.5 block">Год выпуска</Label>
                <Input
                  type="number"
                  value={currentCar.specs.year}
                  onChange={(e) => updateSpec("year", Number(e.target.value))}
                />
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Коробка</Label>
                <Select
                  value={currentCar.specs.transmission}
                  onValueChange={(v) => updateSpec("transmission", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="АКПП">АКПП</SelectItem>
                    <SelectItem value="МКПП">МКПП</SelectItem>
                    <SelectItem value="Робот">Робот</SelectItem>
                    <SelectItem value="Вариатор">Вариатор</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Топливо</Label>
                <Select
                  value={currentCar.specs.fuel}
                  onValueChange={(v) => updateSpec("fuel", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Бензин">Бензин</SelectItem>
                    <SelectItem value="Дизель">Дизель</SelectItem>
                    <SelectItem value="Электро">Электро</SelectItem>
                    <SelectItem value="Гибрид">Гибрид</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Кол-во мест</Label>
                <Input
                  type="number"
                  value={currentCar.specs.seats}
                  onChange={(e) => updateSpec("seats", Number(e.target.value))}
                />
              </div>
              <div className="col-span-2">
                <Label className="text-sm mb-1.5 block">Двигатель</Label>
                <Input
                  value={currentCar.specs.engine}
                  onChange={(e) => updateSpec("engine", e.target.value)}
                  placeholder="2.0 л, 150 л.с."
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1" onClick={handleClose}>
              Отмена
            </Button>
            <Button className="flex-1" onClick={handleSave}>
              <Icon name="Save" size={16} />
              <span className="ml-1.5">Сохранить</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminCarEditor;
