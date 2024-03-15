import { arc, pie, select } from "d3";
import { ExpenseWithId } from "./types";


const dims = { height: 300, width: 300, radius: 150 };
const cent = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 };

const svg = select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150);

const graph = svg.append('g')
  .attr('transform', `translate(${cent.x}, ${cent.y})`);

const p = pie()
  .sort(null)
  .value((d: any) => d.amount);


const arcPath = arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);

export function update(data: ExpenseWithId[]) {
  const paths = graph.selectAll('path')
    .data(p(data as any))

  paths.enter().append('path')
    .attr('class', 'arc')
    .attr('d', (d) => arcPath(d as any))
    .attr('stroke', '#fff')
}
