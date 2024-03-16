import { ArcElement, ExpenseWithId } from "./types";
import { arcTweenEnter, arcTweenExit, arcTweenUpdate } from "./tweens";
import { colour } from "./scales";
import { legend } from "./generators";
import { p } from "./dataProcesser";
import { arcPath } from "./dGenerators";
import { graph, legendGroup } from "./initElements";

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
