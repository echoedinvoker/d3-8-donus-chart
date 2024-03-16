import { select } from "d3";
import { ArcElement, ExpenseWithId } from "./types";
import { arcTweenEnter, arcTweenExit, arcTweenUpdate } from "./tweens";
import { colour } from "./scales";
import { legend } from "./generators";
import { p } from "./dataProcesser";
import { cent, dims } from "./config";
import { arcPath } from "./dGenerators";



const svg = select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150);

const graph = svg.append('g')
  .attr('transform', `translate(${cent.x}, ${cent.y})`);

const legendGroup = svg.append('g')
  .attr('transform', `translate(${dims.width + 40}, 10)`);

export function update(data: ExpenseWithId[]) {

  colour.domain(data.map(d => d.itemname));

  legendGroup.call(legend as any);
  legendGroup.selectAll('text').attr('fill', 'white');

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
