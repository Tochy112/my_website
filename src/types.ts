import type { ReactNode } from "react";

export type AnimatedSectionProps = {
  id: string;
  className?: string;
  thresh?: number;
  children: ReactNode;
};