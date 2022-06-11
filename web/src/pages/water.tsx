import type { NextPage } from 'next'
import CenteredCard from '@/components/Card/CenteredCard'
import Tree from '@/Tree/Tree'

const Water: NextPage = () => {
	return (
		<CenteredCard>
			<Tree level={2} lastWatered={5}/>
		</CenteredCard>

	)
}

export default Water
