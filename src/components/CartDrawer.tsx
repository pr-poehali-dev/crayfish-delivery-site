import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import type { Product } from "@/components/CatalogSection";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
}

const CartDrawer = ({ open, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl flex items-center gap-2">
            <Icon name="ShoppingCart" size={22} />
            Корзина
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <span className="text-6xl mb-4">🦞</span>
            <p className="text-muted-foreground text-lg mb-2">Корзина пуста</p>
            <p className="text-muted-foreground text-sm">Добавьте раков из каталога</p>
            <Button variant="outline" className="mt-6" onClick={onClose}>
              Перейти к каталогу
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 p-3 rounded-xl bg-secondary/40"
                >
                  <span className="text-3xl">{item.product.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.product.name}</p>
                    <p className="text-muted-foreground text-xs">{item.product.price}₽ / {item.product.weight}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              {total >= 3000 && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-lg px-3 py-2">
                  <Icon name="Gift" size={16} />
                  <span className="text-sm font-medium">Бесплатная доставка!</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Итого:</span>
                <span className="text-2xl font-bold">{total.toLocaleString("ru-RU")}₽</span>
              </div>

              <Button className="w-full h-12 text-base" size="lg">
                <Icon name="Send" size={18} />
                <span className="ml-2">Оформить заказ</span>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
