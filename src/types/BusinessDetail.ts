import { Business } from "./Business";

export interface BusinessDetail extends Business {
  hours: Hours[];
  is_claimed: boolean;
  photos: string[];
}

interface Hours {
  hours_type: string;
  is_open_now: boolean;
  open: Open[];
}

interface Open {
  day: number;
  end: string;
  is_overnight: boolean;
  start: string;
}
