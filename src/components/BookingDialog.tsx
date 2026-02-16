import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import type { Car } from "@/data/cars";

interface BookingDialogProps {
  car: Car | null;
  open: boolean;
  onClose: () => void;
}

const BookingDialog = ({ car, open, onClose }: BookingDialogProps) => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { days, total } = useMemo(() => {
    if (!car || !startDate || !endDate) return { days: 0, total: 0 };
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / 86400000);
    const d = Math.max(diff, 0);
    return { days: d, total: d * car.pricePerDay };
  }, [car, startDate, endDate]);

  const handleSubmit = () => {
    if (!name || !phone || days <= 0) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setStartDate(today);
    setEndDate(tomorrow);
    onClose();
  };

  if (!car) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={32} className="text-green-600" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground mb-1">
              {car.name} на {days} {days === 1 ? "день" : days < 5 ? "дня" : "дней"}
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Мы перезвоним в течение 15 минут для подтверждения
            </p>
            <Button onClick={handleClose}>Закрыть</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Бронирование</DialogTitle>
            </DialogHeader>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 mb-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-20 h-14 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold truncate">{car.name}</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{car.category}</Badge>
                  <span className="text-sm text-muted-foreground">{car.specs.engine}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="start" className="text-sm mb-1.5 block">Дата начала</Label>
                  <Input
                    id="start"
                    type="date"
                    value={startDate}
                    min={today}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      if (e.target.value >= endDate) {
                        const next = new Date(e.target.value);
                        next.setDate(next.getDate() + 1);
                        setEndDate(next.toISOString().split("T")[0]);
                      }
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="end" className="text-sm mb-1.5 block">Дата окончания</Label>
                  <Input
                    id="end"
                    type="date"
                    value={endDate}
                    min={startDate || today}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              {days > 0 && (
                <div className="rounded-xl bg-primary/5 border border-primary/15 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      {car.pricePerDay.toLocaleString("ru-RU")}₽ × {days} {days === 1 ? "день" : days < 5 ? "дня" : "дней"}
                    </span>
                    <span className="font-bold text-lg">{total.toLocaleString("ru-RU")}₽</span>
                  </div>
                  {days >= 7 && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <Icon name="Tag" size={12} />
                      Скидка 10% при аренде от 7 дней — итого {Math.round(total * 0.9).toLocaleString("ru-RU")}₽
                    </p>
                  )}
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-sm mb-1.5 block">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm mb-1.5 block">Телефон</Label>
                <Input
                  id="phone"
                  placeholder="+7 (999) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <Button
                className="w-full h-12 text-base"
                disabled={!name || !phone || days <= 0}
                onClick={handleSubmit}
              >
                <Icon name="CheckCircle" size={18} />
                <span className="ml-2">
                  Забронировать за {days > 0 ? `${(days >= 7 ? Math.round(total * 0.9) : total).toLocaleString("ru-RU")}₽` : "..."}
                </span>
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
