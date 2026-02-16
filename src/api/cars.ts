import type { Car } from "@/data/cars";
import funcUrls from "../../backend/func2url.json";

const API = {
  getCars: funcUrls["get-cars"],
  updateCar: funcUrls["update-car"],
  uploadImage: funcUrls["upload-car-image"],
};

export async function fetchCars(): Promise<Car[]> {
  const res = await fetch(API.getCars);
  if (!res.ok) throw new Error("Failed to fetch cars");
  return res.json();
}

export async function updateCar(id: number, data: Partial<Car> & { specs?: Partial<Car["specs"]> }): Promise<void> {
  const res = await fetch(API.updateCar, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...data }),
  });
  if (!res.ok) throw new Error("Failed to update car");
}

export async function uploadCarImage(carId: number, file: File): Promise<string> {
  const base64 = await fileToBase64(file);
  const res = await fetch(API.uploadImage, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      carId,
      file: base64,
      contentType: file.type,
    }),
  });
  if (!res.ok) throw new Error("Failed to upload image");
  const data = await res.json();
  return data.imageUrl;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default API;
