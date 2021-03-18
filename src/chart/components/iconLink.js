

module.exports = function iconLink({ svg, x = 5, y = 5 }) {
  const container = svg
    .append('g')
    .attr('stroke', 'none')
    .attr('fill', 'none')
    .style('cursor', 'pointer')
    .append('g')

  const icon = container
    .append('g')
    .attr('id', 'icon')
    .attr('fill', '#3344DD')
    .attr('transform', `translate(${x}, ${y})`)

  const more= icon
        more.append('circle')
        .attr('cx', 150)
        .attr('cy', 10)
        .attr('r','2px'),
        more.append('circle')
        .attr('cx', 150)
        .attr('cy', 17)
        .attr('r','2px'),
        more.append('circle')
        .attr('cx', 150)
        .attr('cy', 24)
        .attr('r','2px')
}