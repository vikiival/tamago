
import CenteredCard from '@/components/Card/CenteredCard'
import MintButton from '@/components/Button/MintButton'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<CenteredCard>
			<div className="flex flex-col">
				<h5 className="font-medium leading-tight text-xl p-1 text-blue-600">Plant your Tamagochi Tree</h5>
				<Image src="/images/movie.gif" alt="me" width="512" height="512" />
				{/* <MintButton /> */}
			</div>
		</CenteredCard>

	)
}

export default Home
