import { Scale } from "../interfaces";

export interface Star {
  average: boolean;
  checked: boolean;
  focused: boolean;
  fraction: number;
  hovered: boolean;
  id: string;
  idx: number;
  partial: boolean;
  selected: boolean;
  value: number;
}

export interface StarIconProps {
  full: boolean;
  scale: Scale;
  partial?: boolean;
}
