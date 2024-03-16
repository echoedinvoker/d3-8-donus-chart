import { legendColor } from "d3-svg-legend";
import { colour } from "../scales";

export const legend = legendColor()
  .shape('circle')
  .scale(colour);
