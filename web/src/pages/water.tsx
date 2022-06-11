import type { NextPage } from 'next'
import CenteredCard from '@/components/Card/CenteredCard'
import Tree from '@/Tree/Tree'
import WaterButton from '@/components/Button/WaterButton'
import { useContractRead } from 'wagmi'
import contractConfig from '@/utils/config/contract.config'

const Water: NextPage = () => {
	const { data: totalSupplyData } = useContractRead(
    contractConfig,
    'totalSupply',
    { watch: true }
  );
	return (
		<CenteredCard>
			<Tree level={4} lastWatered={5}/>
			<WaterButton />
		</CenteredCard>

	)
}

export default Water
