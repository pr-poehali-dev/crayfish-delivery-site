import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import DeliveryCalculator from "@/components/DeliveryCalculator";
import ReviewsSection from "@/components/ReviewsSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/components/CatalogSection";
import type { CartItem } from "@/components/CartDrawer";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = useCallback((section: string) => {
    if (section === "cart") {
      setCartOpen(true);
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    toast({
      title: `${product.emoji} ${product.name}`,
      description: "Добавлено в корзину",
    });
  }, [toast]);

  const handleUpdateQuantity = useCallback((productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleRemove = useCallback((productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <CatalogSection onAddToCart={handleAddToCart} />
      <DeliveryCalculator />
      <ReviewsSection />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default Index;
