import CenteredCard from '@/components/Card/CenteredCard'
import MintButton from '@/components/Button/MintButton'
import type { NextPage } from 'next'
import Image from 'next/image'


const Plant: NextPage = () => {
	return (
		<CenteredCard>
			<div className="flex flex-col">
				{/* <h5 className="font-medium leading-tight text-xl p-1 text-blue-600">Plant</h5> */}
				<Image src="/images/tree.png" alt="me" width="512" height="512" />
				<MintButton />
			</div>
		</CenteredCard>
	)
}

export default Plant
