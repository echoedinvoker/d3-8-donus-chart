import { interpolate } from "d3";
import { arcPath } from "../update";

export function arcTweenExit(d: any): (t: number) => string {
  // var i = interpolate(d.endAngle, d.startAngle);
  var i = interpolate(d.startAngle, d.endAngle)
  return function(t: number) {
    // d.startAngle = i(t);
    d.endAngle = i(t);
    return arcPath(d) as string;
  };
}
