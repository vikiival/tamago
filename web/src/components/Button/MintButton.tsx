import contractConfig from '@/utils/config/contract.config'
import { FC, useEffect, useState } from 'react'
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useAccount
} from 'wagmi';

const MintButton: FC<any> = () => {
  // const [totalMinted, setTotalMinted] = useState(0);
  const { isConnected } = useConnect();
  const { data: account } = useAccount();
  const [style, setStyle] = useState('bg-green-500 hover:bg-green-700');
  const [text, setText] = useState('Mint lovely tree');


  const {
    write: mint,
    isLoading,
  } = useContractWrite(contractConfig, 'plant');

  console.log('account.address', account?.address, isConnected)

  const { data: currentBalance } = useContractRead(
    contractConfig,
    'balanceOf',
    { watch: true, args: account?.address, enabled: isConnected }
  );

  console.log('currentBalance', Number(currentBalance))
  const alreadyPlanted = Number(currentBalance)

  // const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
  //   hash: mintData?.hash,
  // });

  const handleClick = () => {
    // console.log('Mining ready now just call mint()');
    console.log('Calling MINT()');
    mint()
    
  }

  useEffect(() => {
    if (alreadyPlanted) {
      setStyle('bg-gray-500');
      setText('You have already planted a tree');
    }

  }, [alreadyPlanted])



  return (
   <button disabled={!isConnected || isLoading || alreadyPlanted >= 1} onClick={handleClick} className={`${style} text-white font-bold p-4 w-full`}>
      { text }
    </button>
  )
}

export default MintButton;
