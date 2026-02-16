import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Car" size={20} className="text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">МосДрайв</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Автомобили
          </a>
          <a href="/#how" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Как арендовать
          </a>
          <a href="/#contacts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+74951234567" className="hidden md:flex">
            <Button variant="default" size="sm">
              <Icon name="Phone" size={16} />
              <span className="ml-1.5">+7 (495) 123-45-67</span>
            </Button>
          </a>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="/#catalog" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">Автомобили</a>
            <a href="/#how" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">Как арендовать</a>
            <a href="/#contacts" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">Контакты</a>
            <a href="tel:+74951234567" className="py-2 text-sm font-medium text-primary">+7 (495) 123-45-67</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
