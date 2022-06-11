import { FC } from 'react'
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';

const MintButton: FC<any> = () => {
  // const [totalMinted, setTotalMinted] = useState(0);
  // const { isConnected } = useConnect();

  // const {
  //   data: mintData,
  //   write: mint,
  //   isLoading: isMintLoading,
  //   isSuccess: isMintStarted,
  //   error: mintError,
  // } = useContractWrite(contractConfig, 'mint');

  // const { data: totalSupplyData } = useContractRead(
  //   contractConfig,
  //   'totalSupply',
  //   { watch: true }
  // );

  // const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
  //   hash: mintData?.hash,
  // });

  const handleClick = () => {
    console.log('Mining ready now just call mint()');
    
  }

  return (
   <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      Mint
    </button>
  )
}

export default MintButton;