import type { OpeningHour } from "@/lib/types";

export const weeklyHours: OpeningHour[] = [
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: null, close: null },
  { day: "Wednesday", open: "17:30", close: "22:00" },
  { day: "Thursday", open: "17:30", close: "22:00" },
  { day: "Friday", open: "17:30", close: "23:00" },
  { day: "Saturday", open: "17:30", close: "23:00" },
  { day: "Sunday", open: "17:30", close: "21:30" }
];

export function getTodayHours(date = new Date()): OpeningHour {
  const dayIndex = date.getDay(); // 0-6, Sunday = 0
  const mapIndex = (dayIndex + 6) % 7; // remap so Monday is index 0
  return weeklyHours[mapIndex];
}


