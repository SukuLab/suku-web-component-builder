import { Component, OnInit, Input, ViewEncapsulation, OnChanges, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'suku-tree',
	templateUrl: './suku-tree.component.html',
	styleUrls: [ './suku-tree.component.scss' ]
})
export class SukuTreeComponent implements OnChanges {
	@Input('tree-data') treeDataFromApi;
	@Input() relation;
	@Output() action = new EventEmitter();
	tree;
	root;
	i;
	svg;
	boxWidth = 183;
	boxHeight = 55;
	margin = {
		top: 50,
		right: 5,
		bottom: 50,
		left: 5
	};
	width = 1060 - this.margin.left - this.margin.right;
	height = 510 - this.margin.top - this.margin.bottom;
	data: any;
	testd: number;
	childCount = 0;
	max: any = 0;
	tree1: any;
	maxHeight: any = 0;
	dataUID;
	svgNOde: any;
	j: any;

	ngOnChanges() {
		if (this.treeDataFromApi) {
			if (document.getElementById('tree')) {
				const list = document.getElementById('tree');
				while (list.hasChildNodes()) {
				  list.removeChild(list.firstChild);
				}
				this.width = 0;
				this.height = 0;
				this.max = 0;
				this.maxHeight = 0;
			}
			this.constructTree();
			console.log('tree called');
		}
	}

	constructTree() {
		const treeData = this.treeDataFromApi;
		this.root = treeData[0];
		this.tree = d3.layout.tree().separation((a, b) => (a.parent === b.parent ? 5 : 5.25)).children((d) => {
			return d.relations;
		});
		const nodes = this.tree.nodes(this.root).reverse();
		if (this.relation == 1) {
			nodes.forEach((d) => {
				if (d.depth > this.max) {
					this.max = d.depth;
				}
				if (d.children) {
					if (d.children.length > this.maxHeight) {
						this.maxHeight = d.children.length;
					}
				}
			});
			this.width = (this.max + 1) * 300 - this.margin.left - this.margin.right;
			this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
		} else {
			nodes.forEach((d) => {
				if (d.depth > this.max) {
					this.max = d.depth;
				}
				if (d.children) {
					if (d.children.length > this.maxHeight) {
						this.maxHeight = d.children.length;
					}
				}
			});
			this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
			this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
		}
		console.log('width', this.width, this.maxHeight);
		this.i = 0;
		this.j = 0;
		this.testd = 0;
		if (treeData) {
			this.tree = d3.layout
				.tree()
				.separation((a, b) => (a.parent === b.parent ? 5 : 5.25))
				.children((d) => {
					return d.relations;
				})
				.size([ this.height, this.width ]);

			this.svg = d3
				.select('#tree')
				.insert('p')
				.attr('id', 'treedata')
				.attr('width', this.width + this.margin.right + this.margin.left)
				.attr('height', this.height + this.margin.top + this.margin.bottom)
				.append('svg')
				.attr('width', this.width + this.margin.right + this.margin.left)
				.attr('height', this.height + this.margin.top + this.margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

			this.root = treeData[0];
			this.drawTree();
		}
	}

	drawTree() {
		const nodes = this.tree.nodes(this.root).reverse();
		const links = this.tree.links(nodes);

		if (this.relation == 1) {
			nodes.forEach((d) => {
				d.y = this.width - (this.max + 1) * 180 - d.depth * -270; // reverse tree
			});
		} else {
			nodes.forEach((d) => {
				d.y = this.width - 109 - d.depth * 270; // reverse tree
			});
		}

		const node = this.svg.selectAll('g.node').data(nodes, (d) => {
			return d.id || (d.id = ++this.i); // assign id to nodes
		});

		const nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', (d) => {
			return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
		});

		// append line into svg
		node
			.append('line')
			.style('stroke', (d) => {
				console.log('d', d);
				if (d.depth === 0) {
					return '#6f3bda';
				} else {
					// if (d.depth === 1) {
					// 	return '#3fdbef';
					// }
					// if (d.depth === 2) {
					// 	return '#b8ce2b';
					// }
					if (this.relation == 0) {
						return '#3fdbef';
					} else {
						return '#b8ce2b';
					}
				}
			})
			.attr('x1', -(this.boxWidth / 2))
			.attr('y1', (d) => {
				if (d.asset.name.length > 50) {
					return -(this.boxHeight / 2);
				}
				if (d.asset.name.length > 23) {
					return -(this.boxHeight / 2);
				}
				if (d.asset.name.length > 0) {
					return -(this.boxHeight / 2);
				}
			})
			.attr('x2', -(this.boxWidth / 2))
			.attr('y2', (d) => {
				if (d.asset.name.length > 50) {
					return this.boxHeight / 2 + 30;
				}
				if (d.asset.name.length > 40) {
					return this.boxHeight / 2 + 30;
				}
				if (d.asset.name.length > 23) {
					return this.boxHeight / 2 + 10;
				}
				if (d.asset.name.length > 0) {
					return this.boxHeight / 2;
				}
			})
			.attr('stroke-width', '10');

		// append rect into svg

		node
			.append('rect')
			.attr({
				x: -(this.boxWidth / 2),
				y: -(this.boxHeight / 2),
				width: this.boxWidth,
				height: (d) => {
					if (d.asset.name.length > 40) {
						return this.boxHeight + 30;
					} else if (d.asset.name.length > 23) {
						return this.boxHeight + 10;
					} else {
						return this.boxHeight;
					}
				}
			})
			.attr('fill', 'white')
			.attr('stroke-width', '.9')
			.attr('stroke', '#f2f2f2');

		node.insert('g', 'g').attr('class', 'dot');
		// append dots to rect
		this.svg
			.selectAll('g.dot')
			.insert('circle')
			.attr('r', 2.2)
			.attr('cx', 65)
			.attr('cy', (d) => {
				if (d.asset.name.length > 50) {
					return 50;
				}
				if (d.asset.name.length > 40) {
					return 48;
				} else if (d.asset.name.length > 23) {
					return 28;
				} else {
					return 17;
				}
			})
			.attr('fill', '#b6b6b6');
		this.svg
			.selectAll('g.dot')
			.insert('circle')
			.attr('r', 2.2)
			.attr('cx', 72)
			.attr('cy', (d) => {
				if (d.asset.name.length > 50) {
					return 50;
				}
				if (d.asset.name.length > 40) {
					return 48;
				} else if (d.asset.name.length > 23) {
					return 28;
				} else {
					return 17;
				}
			})
			.attr('fill', '#b6b6b6');
		this.svg
			.selectAll('g.dot')
			.insert('circle')
			.attr('r', 2.2)
			.attr('cx', 79)
			.attr('cy', (d) => {
				if (d.asset.name.length > 50) {
					return 50;
				}
				if (d.asset.name.length > 40) {
					return 48;
				} else if (d.asset.name.length > 23) {
					return 28;
				} else {
					return 17;
				}
			})
			.attr('fill', '#b6b6b6');
		this.svg
			.selectAll('g.dot')
			.insert('rect')
			.attr('class', 'dot')
			.attr('x', '60')
			.attr('y',  (d) => {
				if (d.asset.name.length > 50) {
					return 45;
				}
				if (d.asset.name.length > 40) {
					return 30;
				}
				if (d.asset.name.length > 23) {
					return 23;
				}
				if (d.asset.name.length > 0) {
					return 15;
				}
			})
			.attr('id', (d) => {
				return 'asset' + ++this.j;
			})
			.attr('height', '10')
			.attr('width', '25')
			.attr('fill', 'transparent')
			.on('click', (d) => {
				console.log(d);
				if (d.uid) {
					this.dataUID = d.uid;
					this.action.emit(d.uid);
				}
			});

		this.svgNOde = node
			.append('text')
			.attr('x', (d) => {
				return -(this.boxWidth / 10) - 65;
			})
			.attr('y', (d) => {
				return -(this.boxWidth / 35);
			})
			.style('text-anchor', 'middle')
			.style('fill', '#aaaaaa')
			.attr('font-family', 'sans-serif')
			.text((d) => {
				return d.asset.name;
			})
			.call(function wrap(text, width) {
				text.each(function() {
					console.log('word tezt infor each', d3.select(this));
					// tslint:disable-next-line:prefer-const
					// tslint:disable-next-line:no-shadowed-variable
					const text = d3.select(this);
					const words = text.text().split(/\s+/).reverse();
					let word;
					let line = [];
					let lineNumber = 0;
					const lineHeight = 1.3; // ems
					const x = text.attr('x');
					const y = text.attr('y');
					const dy = 0; // parseFloat(text.attr("dy")),
					let tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em').style('text-anchor', 'start');
					while ((word = words.pop())) {
						console.log('word', word);
						line.push(word);
						tspan.text(line.join(' '));
						if (tspan.node().getComputedTextLength() > 170) {
							line.pop();
							tspan.text(line.join(' '));
							line = [ word ];
							tspan = text
								.append('tspan')
								.attr('x', x)
								.attr('y', y)
								.attr('dy', ++lineNumber * lineHeight + dy + 'em')
								.style('text-anchor', 'start')
								.text(word);
						}
					}
				});
			});

		const link = this.svg.selectAll('path.link').data(links, (d) => {
			this.data = d;
			return d.target.id;
		});

		// append link into svg
		link
			.enter()
			.insert('path', 'g')
			.attr('class', 'link')
			.attr('fill', 'none')
			.attr('stroke', '#c2c1c1')
			.attr('stroke-width', '2')
			.attr('shape-rendering', 'crispEdges')
			.attr('d', (d) => {
				const sourceX = d.source.x,
					sourceY = d.source.y + this.boxWidth / 2,
					targetX = d.target.x,
					targetY = d.target.y - this.boxWidth / 2;
				return (
					'M' +
					sourceY +
					',' +
					sourceX +
					'H' +
					(sourceY + (targetY - sourceY) / 2) +
					'V' +
					targetX +
					'H' +
					targetY
				);
			});

	}

	actionFun(val) {
		this.action.emit(val);
	}
}
