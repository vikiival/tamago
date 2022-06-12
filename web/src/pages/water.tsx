import type { NextPage } from 'next'
import CenteredCard from '@/components/Card/CenteredCard'
import Tree from '@/Tree/Tree'
import WaterButton from '@/components/Button/WaterButton'
import { useAccount, useConnect, useContractRead } from 'wagmi'
import contractConfig from '@/utils/config/contract.config'

const Water: NextPage = () => {
	const { isConnected } = useConnect();
  const { data: account } = useAccount();
	const { data: id } = useContractRead(
    contractConfig,
    'getTreeIdByAccount',
    { watch: true, args: account?.address, enabled: isConnected }
  );

	return (
		<CenteredCard>
			<Tree level={4} lastWatered={5}/>
			{id && <WaterButton id={id} />}
		</CenteredCard>

	)
}

export default Water
