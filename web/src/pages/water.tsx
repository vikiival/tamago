import type { NextPage } from 'next'
import CenteredCard from '@/components/Card/CenteredCard'
import Tree from '@/Tree/Tree'
import WaterButton from '@/components/Button/WaterButton'
import { useAccount, useConnect, useContractRead } from 'wagmi'
import contractConfig from '@/utils/config/contract.config'
const SECONDS_PER_DAY = 24 * 60 * 60
const today = (() => {
	const unix = Date.now() / 1000
	const secs = unix % SECONDS_PER_DAY
	return unix - secs
})()

const Water: NextPage = () => {
	const { isConnected } = useConnect();
  const { data: account } = useAccount();
	const { data: mayId } = useContractRead(
    contractConfig,
    'getTreeIdByAccount',
    { watch: true, args: account?.address, enabled: isConnected }
  );

	
	const id = mayId?.toNumber()
	const enabled = isConnected && id !== undefined

	const { data: mayLevel } = useContractRead(
    contractConfig,
    'getLevel',
    { watch: true, args: [id], enabled}
  );

	const { data: mayPlanted } = useContractRead(
    contractConfig,
    'getLastPlanted',
    { watch: true, args: [id], enabled }
  );

	const level = mayLevel?.toNumber()
	const planted = mayPlanted?.toNumber()

	return (
		<CenteredCard>
			<Tree level={level} lastWatered={5}/>
			{id !== undefined && <WaterButton id={id} alreadyWatered={planted === today} level={level} />}
		</CenteredCard>

	)
}

export default Water
