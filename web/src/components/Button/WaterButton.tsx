import { FC } from 'react'
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';

const WaterButton: FC<any> = ({ id }) => {
  // const [totalMinted, setTotalMinted] = useState(0);
  const { isConnected } = useConnect();

  // const {
  //   data: mintData,
  //   write: mint,
  //   isLoading: isMintLoading,
  //   isSuccess: isMintStarted,
  //   error: mintError,
  // } = useContractWrite(contractConfig, 'mint', { args: [id] });

  // const { data: totalSupplyData } = useContractRead(
  //   contractConfig,
  //   'totalSupply',
  //   { watch: true }
  // );

  // const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
  //   hash: mintData?.hash,
  // });

  const handleClick = () => {
    console.log('Water ready now just call mint()'); 
  }

  return (
    <button disabled={!isConnected} onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full">
      Water
    </button>
  )
}

export default WaterButton;
