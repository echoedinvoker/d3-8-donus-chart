import { dims } from "../config";
import { arc } from "d3";

export const arcPath = arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);
