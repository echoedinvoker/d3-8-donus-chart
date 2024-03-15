import { interpolate } from "d3";
import { arcPath } from "../update";

export function arcTweenEnter(d: any): (t: number) => string {
  var i = interpolate(d.endAngle, d.startAngle);
  return function(t: number) {
    d.startAngle = i(t);
    return arcPath(d) as string;
  };
}
