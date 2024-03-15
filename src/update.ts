import { arc, pie, scaleOrdinal, schemeSet3, select } from "d3";
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

// const colour = scaleOrdinal(['#f4d03f', '#16a085', '#e74c3c', '#95a5a6', '#e67e22']);
const colour = scaleOrdinal(schemeSet3)

export function update(data: ExpenseWithId[]) {

  colour.domain(data.map(d => d.itemname));

  const paths = graph.selectAll('path')
    .data(p(data as any))

  paths.enter().append('path')
    .attr('class', 'arc')
    .attr('d', (d) => arcPath(d as any))
    .attr('stroke', '#fff')
    .attr('fill', (d: any) => colour(d.data.itemname))
}
