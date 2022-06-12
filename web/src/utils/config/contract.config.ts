import { WriteContractArgs } from '@wagmi/core';
import contractInterface from '../../../../server/artifacts/contracts/Tree.sol/Tree.json';

const config: WriteContractArgs = {
  addressOrName: '0x56157c71414aFCd499035092BFC1c96467c525eC', //process.env.NEXT_PUBLIC_CONTRACT,
  contractInterface: contractInterface.abi,
}
console.log(process.env.NEXT_PUBLIC_CONTRACT)
export default config