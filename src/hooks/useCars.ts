import { useState, useEffect, useCallback } from "react";
import { defaultCars, type Car } from "@/data/cars";
import { fetchCars, updateCar as apiUpdateCar, uploadCarImage } from "@/api/cars";

export function useCars() {
  const [cars, setCars] = useState<Car[]>(defaultCars);
  const [loading, setLoading] = useState(true);

  const loadCars = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCars();
      setCars(data);
    } catch (e) {
      console.error("Failed to load cars:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  const updateCar = async (id: number, updates: Partial<Car>) => {
    await apiUpdateCar(id, updates);
    setCars((prev) =>
      prev.map((car) => (car.id === id ? { ...car, ...updates } : car))
    );
  };

  const uploadImage = async (carId: number, file: File) => {
    const imageUrl = await uploadCarImage(carId, file);
    setCars((prev) =>
      prev.map((car) => (car.id === carId ? { ...car, image: imageUrl } : car))
    );
    return imageUrl;
  };

  return { cars, setCars, updateCar, uploadImage, loading, reload: loadCars };
}

export default useCars;
