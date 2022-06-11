import { FC } from 'react'
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})
import p5Types from "p5" //Import this for typechecking and intellisense

const Tree: FC<any> = () => {
  let x = 50;
  const y = 50;
  const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
}

export default Tree