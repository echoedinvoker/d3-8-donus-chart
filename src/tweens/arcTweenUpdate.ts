import { interpolate } from "d3";
import { arcPath } from "../dGenerators";
import { ArcElement } from "types";

export function arcTweenUpdate(that: ArcElement, d: any): (t: number) => string {
  // var i = interpolate(d.endAngle, d.startAngle);
  var i = interpolate(that._current, d)
  that._current = d;
  return function(t: number) {
    // d.startAngle = i(t);
    return arcPath(i(t)) as string;
  };
}
