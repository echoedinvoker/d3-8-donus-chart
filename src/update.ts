import { arc, pie, scaleOrdinal, schemeSet3, select } from "d3";
import { ArcElement, ExpenseWithId } from "./types";
import { arcTweenEnter, arcTweenExit, arcTweenUpdate } from "./tweens";


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


export const arcPath = arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);

const colour = scaleOrdinal(schemeSet3)

export function update(data: ExpenseWithId[]) {

  colour.domain(data.map(d => d.itemname));

  const paths = graph.selectAll('path')
    .data(p(data as any))

  paths.exit()
    .transition().duration(750)
    .attrTween('d', arcTweenExit)
    .remove();

  paths.attr('d', (d) => arcPath(d as any))
    .transition().duration(750)
    .attrTween('d', function(this: ArcElement, d: any) { return arcTweenUpdate(this, d) } as any)

  paths.enter().append('path')
    .attr('class', 'arc')
    .attr('stroke', '#fff')
    .attr('fill', (d: any) => colour(d.data.itemname))
    .transition().duration(750)
    .attrTween('d', d => arcTweenEnter(d))
}
