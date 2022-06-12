import { WriteContractArgs } from '@wagmi/core';
import contractInterface from '../../../../server/artifacts/contracts/Tree.sol/Tree.json';

const config: WriteContractArgs = {
  addressOrName: '0xb67E87de592B950E27953586a2Abab08786dda08', //process.env.NEXT_PUBLIC_CONTRACT,
  contractInterface: contractInterface.abi,
}
console.log(process.env.NEXT_PUBLIC_CONTRACT)
export default config