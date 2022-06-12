import contractConfig from '@/utils/config/contract.config'
import { FC, useEffect, useState } from 'react'
import {
  useContractWrite,
} from 'wagmi';

const WaterButton: FC<any> = ({ id, alreadyWatered, level }) => {
  // const [totalMinted, setTotalMinted] = useState(0);
  const [style, setStyle] = useState('bg-blue-500 hover:bg-blue-700');
  const [text, setText] = useState('Water my tree');

  const {
    write: water,
  } = useContractWrite(contractConfig, 'water', { args: [id] });

  // const {
  //   data: mintData,
  //   write: mint,
  //   isLoading: isMintLoading,
  //   isSuccess: isMintStarted,
  //   error: mintError,
  // } = useContractWrite(contractConfig, 'mint', { args: id });

  // const { data: totalSupplyData } = useContractRead(
  //   contractConfig,
  //   'totalSupply',
  //   { watch: true }
  // );

  // const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
  //   hash: mintData?.hash,
  // });

  const handleClick = () => {
    console.log('Calling WATER()');
    water()
  }

  useEffect(() => {
    if (alreadyWatered) {
      setStyle('bg-gray-500');
      setText('Nice job already watered');
    }

  }, [alreadyWatered])

  return (
    <button disabled={alreadyWatered && false} onClick={handleClick} className={`${style} text-white font-bold py-2 px-4 w-full`}>
      {text} (id: {id}, level: {level})
    </button>
  )
}

export default WaterButton;
