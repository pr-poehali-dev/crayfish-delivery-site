import { useState, useEffect } from "react";
import { defaultCars, type Car } from "@/data/cars";

const STORAGE_KEY = "mosdrive_cars";

export function useCars() {
  const [cars, setCars] = useState<Car[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultCars;
      }
    }
    return defaultCars;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
  }, [cars]);

  const updateCar = (id: number, updates: Partial<Car>) => {
    setCars((prev) =>
      prev.map((car) => (car.id === id ? { ...car, ...updates } : car))
    );
  };

  return { cars, setCars, updateCar };
}

export default useCars;
