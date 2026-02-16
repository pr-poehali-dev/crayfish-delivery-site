import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  onNavigate: (section: string) => void;
}

const Header = ({ cartCount, onNavigate }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate("hero")} className="flex items-center gap-2">
          <span className="text-2xl">🦞</span>
          <span className="font-serif font-bold text-xl text-foreground">РакоЛов</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate("catalog")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Каталог
          </button>
          <button onClick={() => onNavigate("delivery")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Доставка
          </button>
          <button onClick={() => onNavigate("reviews")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Отзывы
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="relative"
            onClick={() => onNavigate("cart")}
          >
            <Icon name="ShoppingCart" size={18} />
            <span className="ml-1.5">Корзина</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button onClick={() => { onNavigate("catalog"); setMobileOpen(false); }} className="text-left py-2 text-sm font-medium">Каталог</button>
            <button onClick={() => { onNavigate("delivery"); setMobileOpen(false); }} className="text-left py-2 text-sm font-medium">Доставка</button>
            <button onClick={() => { onNavigate("reviews"); setMobileOpen(false); }} className="text-left py-2 text-sm font-medium">Отзывы</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
