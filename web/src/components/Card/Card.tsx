import { FC } from 'react'

const Card: FC<any> = ({ children }) => {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2">
      { children }
    </div>
  </div>
  )
}

export default Card