import { FC } from 'react'
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
	ssr: false,
})
import p5Types from 'p5' //Import this for typechecking and intellisense
import { TreeStatus } from '@/types'
import { ScaleIcon } from '@heroicons/react/outline'

const Tree: FC<TreeStatus> = ({ level }) => {
	console.log('called tree')
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(p5.windowWidth / 2, p5.windowHeight / 2).parent(canvasParentRef)
		p5.angleMode(p5.DEGREES)
		p5.noLoop()
	}

	const draw = (p5: p5Types) => {
		level = 11

		if (level === 1) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 1) // TODO: @Frank pls change
		}
		if (level === 2) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 1.2) // TODO: @Frank pls change
		}
		if (level === 3) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 1.4) // TODO: @Frank pls change
		}
		if (level === 4) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 1.6) // TODO: @Frank pls change
		}
		if (level === 5) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 1.8) // TODO: @Frank pls change
		}
		if (level === 6) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2) // TODO: @Frank pls change
		}
		if (level === 7) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					// p5.beginShape()
					// for (var i = 45; i < 135; i++) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(i)
					// 	p5.vertex(x, y)
					// }
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 15
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					// p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.2) // TODO: @Frank pls change
		}
		if (level === 8) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 3
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 8
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.4) // TODO: @Frank pls change
		}
		if (level === 9) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 5
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 8
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.4) // TODO: @Frank pls change
		}
		if (level === 10) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 8
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					// for (var i = 135; i > 40; i--) {
					// 	var rad = 8
					// 	var x = rad * p5.cos(i)
					// 	var y = rad * p5.sin(-i) + 20
					// 	p5.vertex(x, y)
					// }
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.4) // TODO: @Frank pls change
		}
		if (level === 11) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 80 + p5.random(-20, 20)
					var g = 120 + r
					var b = 40 + p5.random(-20, 20)
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 8
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					for (var i = 135; i > 40; i--) {
						var rad = 8
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(-i) + 20
						p5.vertex(x, y)
					}
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.4) // TODO: @Frank pls change
		}
		if (level === 12) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 178
					var g = 255
					var b = 214
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 8
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					for (var i = 135; i > 40; i--) {
						var rad = 8
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(-i) + 20
						p5.vertex(x, y)
					}
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.4) // TODO: @Frank pls change
		}
		if (level === 13) {
			p5.background(255)
			p5.translate(p5.width / 2, p5.height / 2 + 200)
			const branch = len => {
				p5.push()
				if (len > 15 - level) {
					p5.strokeWeight(p5.map(len, 10, 100, 1, 15))
					p5.stroke(70, 40, 20)
					p5.line(0, 0, 0, -len)
					p5.translate(0, -len)
					// p5.scale(1,1.1)
					p5.rotate(p5.random(-20, -30))
					branch(len * p5.random(0.7, 0.9))
					p5.rotate(p5.random(50, 60))
					branch(len * p5.random(0.7, 0.9))
				} else {
					var r = 255
					var g = 183
					var b = 200
					p5.fill(r, g, b, 150)
					p5.noStroke()
					// ellipse(0, 0, 10)
					p5.beginShape()
					for (var i = 45; i < 135; i++) {
						var rad = 10
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(i)
						p5.vertex(x, y)
					}
					for (var i = 135; i > 40; i--) {
						var rad = 10
						var x = rad * p5.cos(i)
						var y = rad * p5.sin(-i) + 20
						p5.vertex(x, y)
					}
					p5.endShape(p5.CLOSE)
				}
				p5.pop()
			}
			branch(20 * 2.6) // TODO: @Frank pls change
		}
	}

	return <Sketch setup={setup} draw={draw} />
}

export default Tree
