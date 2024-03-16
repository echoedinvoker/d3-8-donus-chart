import { pie } from "d3";

export const p = pie()
  .sort(null)
  .value((d: any) => d.amount);
