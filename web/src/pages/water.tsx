import type { NextPage } from 'next'
import CenteredCard from '@/components/Card/CenteredCard'
import Tree from '@/Tree/Tree'

const Water: NextPage = () => {
	return (
		<CenteredCard>
			<Tree level={4} lastWatered={5}/>
		</CenteredCard>

	)
}

export default Water
