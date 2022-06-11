import { FC } from 'react'
import CenteredCard from '@/components/Card/CenteredCard'
import MintButton from '@/components/Button/MintButton'
import type { NextPage } from 'next'

const Plant: NextPage = () => {
	return (
		<CenteredCard>
      <div className="grid gap-4 grid-cols-1 grid-rows-3">
      <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-blue-600">Plant</h5>
      <div></div>
      <MintButton />
</div>
      
		</CenteredCard>
	)
}

export default Plant
