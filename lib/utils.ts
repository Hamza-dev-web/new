import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function ListData() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
  
}
