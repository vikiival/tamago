import { FC } from 'react'
import Card from './Card'

const CenteredCard: FC<any> = ({ children }) => {
  return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="max-w-8xl mx-auto sm:px-6 lg:px-8">

				<Card>{children}</Card>
			</div>

		</div>
  )
}

export default CenteredCard