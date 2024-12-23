import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format date
export const formatDate = (date: Date | string | number) => {
  return dayjs(date).format("MMMM D, YYYY");
};

// text
export function truncateText(text: string, maxLength: number = 60): string {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
