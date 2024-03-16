import { cent, dims } from "./config";
import { select } from "d3";

const svg = select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150);

export const graph = svg.append('g')
  .attr('transform', `translate(${cent.x}, ${cent.y})`);

export const legendGroup = svg.append('g')
  .attr('transform', `translate(${dims.width + 40}, 10)`);
