import contractConfig from '@/utils/config/contract.config'
import { FC, useEffect } from 'react'
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useAccount
} from 'wagmi';

const MintButton: FC<any> = () => {
  // const [totalMinted, setTotalMinted] = useState(0);
  const { isConnected } = useConnect();
  const { data: account } = useAccount()

  // const {
  //   write: mint,
  // } = useContractWrite(contractConfig, 'plant');

  console.log('account.address', account?.address, isConnected)

  const { data: currentBalance } = useContractRead(
    contractConfig,
    'balanceOf',
    { watch: true, args: account?.address, enabled: isConnected }
  );

  console.log('currentBalance', currentBalance)

  // const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
  //   hash: mintData?.hash,
  // });

  const handleClick = () => {
    console.log('Mining ready now just call mint()');
    
  }

  return (
   <button disabled={!isConnected} onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-4 w-full">
      Mint
    </button>
  )
}

export default MintButton;
