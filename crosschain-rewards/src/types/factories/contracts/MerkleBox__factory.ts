/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MerkleBox, MerkleBoxInterface } from "../../contracts/MerkleBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MerkleClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNr",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withdrawal",
        type: "bool",
      },
    ],
    name: "MerkleFundUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNr",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawUnlockTime",
        type: "uint256",
      },
    ],
    name: "NewMerkle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "withdrawUnlockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawUnlockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedBalance",
        type: "uint256",
      },
    ],
    name: "addReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "proof",
        type: "bytes[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegatorAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "proof",
        type: "bytes[]",
      },
    ],
    name: "isClaimable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegator",
        type: "address",
      },
    ],
    name: "setDelegator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200320038038062003200833981016040819052620000349162000103565b60016000556200004433620000b1565b6001600160a01b0381166200009f5760405162461bcd60e51b815260206004820152601460248201527f546f6b656e2063616e6e6f74206265207a65726f000000000000000000000000604482015260640160405180910390fd5b6001600160a01b031660805262000135565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200011657600080fd5b81516001600160a01b03811681146200012e57600080fd5b9392505050565b6080516130856200017b600039600081816101e1015281816104730152818161049c01528181610760015281816108640152818161090c0152610a5101526130856000f3fe608060405234801561001057600080fd5b50600436106100d35760003560e01c80639366452c11610081578063f301af421161005b578063f301af42146101bb578063f7c618c1146101dc578063f8738c251461020357600080fd5b80639366452c14610182578063e525310514610195578063f2fde38b146101a857600080fd5b80636d46379b116100b25780636d46379b14610146578063715018a6146101695780638da5cb5b1461017157600080fd5b8062501e28146100d85780631ce92be5146100ed57806341f891a414610100575b600080fd5b6100eb6100e6366004612c02565b61025a565b005b6100eb6100fb366004612c6a565b61051b565b61012961010e366004612c9d565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610159610154366004612cb8565b6105cc565b604051901515815260200161013d565b6100eb610666565b6001546001600160a01b0316610129565b6100eb610190366004612d12565b61067a565b6100eb6101a3366004612d4d565b61096d565b6100eb6101b6366004612c9d565b610ac8565b6101ce6101c9366004612d6f565b610b58565b60405190815260200161013d565b6101297f000000000000000000000000000000000000000000000000000000000000000081565b61023a610211366004612d6f565b600360208190526000918252604090912080546001820154600283015492909301549092919084565b60408051948552602085019390935291830152606082015260800161013d565b610262610b79565b600083815260036020526040902060018101546102c65760405162461bcd60e51b815260206004820152601060248201527f526577617264206e6f7420666f756e640000000000000000000000000000000060448201526064015b60405180910390fd5b336000908152600460205260408120546001600160a01b03166102e95733610303565b336000908152600460205260409020546001600160a01b03165b604080516001600160a01b038316602082015260029181019190915290915060009060600160405160208183030381529060405280519060200120905060006103528460010154838888610bd2565b90506000670de0b6b3a764000085600301548361036f9190612d9e565b6103799190612dcb565b905080856000015410156103cf5760405162461bcd60e51b815260206004820152601d60248201527f436c61696d20756e6465722d66756e6465642062792066756e6465722e00000060448201526064016102bd565b600088815260036020908152604080832086845260040190915290205460ff161561043c5760405162461bcd60e51b815260206004820152600f60248201527f416c726561647920636c61696d6564000000000000000000000000000000000060448201526064016102bd565b60008381526004860160205260409020805460ff191660011790558454610464908290612ddf565b855561049a6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168583610c6f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b03167f3af05bdbca3cea126ac0af71ad1715d8860bec57e252bfccaab4c205455e9cc1836040516104ff91815260200190565b60405180910390a350505050506105166001600055565b505050565b610523610d18565b6001600160a01b0382161580159061054357506001600160a01b03811615155b61058f5760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420616464726573732070726f7669646564000000000000000060448201526064016102bd565b6001600160a01b03908116600090815260046020526040902080549190921673ffffffffffffffffffffffffffffffffffffffff19909116179055565b60008481526003602090815260408083206001015481516001600160a01b038816818501526002818401528251808203840181526060909101909252815191909201208183036106215760009250505061065e565b600087815260036020908152604080832084845260040190915290205460ff161580156106595750600061065783838888610bd2565b115b925050505b949350505050565b61066e610d18565b6106786000610d72565b565b610682610d18565b836106cf5760405162461bcd60e51b815260206004820152601a60248201527f4d65726b6c6520726f6f742063616e6e6f74206265207a65726f00000000000060448201526064016102bd565b600083815260036020526040902060018101541561072f5760405162461bcd60e51b815260206004820152601e60248201527f4d65726b6c6520726f6f742077617320616c726561647920706f73746564000060448201526064016102bd565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156107af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d39190612df2565b90506000871180156107e55750808711155b6108575760405162461bcd60e51b815260206004820152602660248201527f496e76616c696420616d6f756e74206f7220696e73756666696369656e74206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016102bd565b61088c6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308a610dd1565b8682556001820186905560028201849055826108b088670de0b6b3a7640000612d9e565b6108ba9190612dcb565b6003830155600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01859055604080518881526020810187905290810185905286907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169033907f4993e379e2a0a87975314480436d8f2de32d291a64892cb63cdb0839d09044369060600160405180910390a450505050505050565b610975610d18565b600082815260036020526040902060028101544210156109d75760405162461bcd60e51b815260206004820152601c60248201527f52657761726473206d6179206e6f742062652077697468647261776e0000000060448201526064016102bd565b8054821115610a285760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e636500000000000000000000000060448201526064016102bd565b81816000016000828254610a3c9190612ddf565b9182905550825550610a786001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163384610c6f565b6001808201546040805186815260208101869052908101929092529033907f210aece5a2bb3ac8bbec4d3bd83444123ef037a899b89d617e735799f983e6b39060600160405180910390a3505050565b610ad0610d18565b6001600160a01b038116610b4c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102bd565b610b5581610d72565b50565b60028181548110610b6857600080fd5b600091825260209091200154905081565b600260005403610bcb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102bd565b6002600055565b600080610c13610c0e86604051602001610bee91815260200190565b60408051601f19818403018152919052610c088688612e52565b89610e28565b610e4d565b905060005b8151811015610c6557818181518110610c3357610c33612f27565b016020015160f81c610c4784610100612d9e565b610c519190612f3d565b925080610c5d81612f50565b915050610c18565b5050949350505050565b6040516001600160a01b0383166024820152604481018290526105169084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e66565b6001546001600160a01b031633146106785760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102bd565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610e229085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610cb4565b50505050565b60606000610e3585610f4e565b9050610e42818585610f80565b9150505b9392505050565b6060610e60610e5b8361189c565b611958565b92915050565b6000610ebb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611a8d9092919063ffffffff16565b9050805160001480610edc575080806020019051810190610edc9190612f69565b6105165760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102bd565b60608180519060200120604051602001610f6a91815260200190565b6040516020818303038152906040529050919050565b60606000845111610fd35760405162461bcd60e51b815260206004820152601560248201527f4d65726b6c65547269653a20656d707479206b6579000000000000000000000060448201526064016102bd565b6000610fde84611a9c565b90506000610feb86611b8b565b905060008460405160200161100291815260200190565b60405160208183030381529060405290506000805b845181101561182d57600085828151811061103457611034612f27565b6020026020010151905084518311156110b55760405162461bcd60e51b815260206004820152602e60248201527f4d65726b6c65547269653a206b657920696e646578206578636565647320746f60448201527f74616c206b6579206c656e67746800000000000000000000000000000000000060648201526084016102bd565b826000036111545780518051602091820120604051611103926110dd92910190815260200190565b604051602081830303815290604052858051602091820120825192909101919091201490565b61114f5760405162461bcd60e51b815260206004820152601d60248201527f4d65726b6c65547269653a20696e76616c696420726f6f74206861736800000060448201526064016102bd565b611277565b8051516020116111f0578051805160209182012060405161117e926110dd92910190815260200190565b61114f5760405162461bcd60e51b815260206004820152602760248201527f4d65726b6c65547269653a20696e76616c6964206c6172676520696e7465726e60448201527f616c20686173680000000000000000000000000000000000000000000000000060648201526084016102bd565b8051845160208087019190912082519190920120146112775760405162461bcd60e51b815260206004820152602660248201527f4d65726b6c65547269653a20696e76616c696420696e7465726e616c206e6f6460448201527f652068617368000000000000000000000000000000000000000000000000000060648201526084016102bd565b61128360106001612f3d565b8160200151510361143057845183036113c85760006112bf82602001516010815181106112b2576112b2612f27565b6020026020010151611958565b905060008151116113385760405162461bcd60e51b815260206004820152603b60248201527f4d65726b6c65547269653a2076616c7565206c656e677468206d75737420626560448201527f2067726561746572207468616e207a65726f20286272616e636829000000000060648201526084016102bd565b600187516113469190612ddf565b83146113ba5760405162461bcd60e51b815260206004820152603a60248201527f4d65726b6c65547269653a2076616c7565206e6f6465206d757374206265206c60448201527f617374206e6f646520696e2070726f6f6620286272616e63682900000000000060648201526084016102bd565b9650610e4695505050505050565b60008584815181106113dc576113dc612f27565b602001015160f81c60f81b60f81c9050600082602001518260ff168151811061140757611407612f27565b6020026020010151905061141a81611bee565b9550611427600186612f3d565b9450505061181a565b6002816020015151036117ac57600061144882611c13565b905060008160008151811061145f5761145f612f27565b016020015160f81c90506000611476600283612f8b565b611481906002612fad565b90506000611492848360ff16611c37565b905060006114a08a89611c37565b905060006114ae8383611c6d565b9050808351146115265760405162461bcd60e51b815260206004820152603a60248201527f4d65726b6c65547269653a20706174682072656d61696e646572206d7573742060448201527f736861726520616c6c206e6962626c65732077697468206b657900000000000060648201526084016102bd565b60ff85166002148061153b575060ff85166003145b156116e157808251146115b65760405162461bcd60e51b815260206004820152603d60248201527f4d65726b6c65547269653a206b65792072656d61696e646572206d757374206260448201527f65206964656e746963616c20746f20706174682072656d61696e64657200000060648201526084016102bd565b60006115d288602001516001815181106112b2576112b2612f27565b9050600081511161164b5760405162461bcd60e51b815260206004820152603960248201527f4d65726b6c65547269653a2076616c7565206c656e677468206d75737420626560448201527f2067726561746572207468616e207a65726f20286c656166290000000000000060648201526084016102bd565b60018d516116599190612ddf565b89146116cd5760405162461bcd60e51b815260206004820152603860248201527f4d65726b6c65547269653a2076616c7565206e6f6465206d757374206265206c60448201527f617374206e6f646520696e2070726f6f6620286c65616629000000000000000060648201526084016102bd565b9c50610e469b505050505050505050505050565b60ff851615806116f4575060ff85166001145b1561173357611720876020015160018151811061171357611713612f27565b6020026020010151611bee565b995061172c818a612f3d565b98506117a1565b60405162461bcd60e51b815260206004820152603260248201527f4d65726b6c65547269653a2072656365697665642061206e6f6465207769746860448201527f20616e20756e6b6e6f776e20707265666978000000000000000000000000000060648201526084016102bd565b50505050505061181a565b60405162461bcd60e51b815260206004820152602860248201527f4d65726b6c65547269653a20726563656976656420616e20756e70617273656160448201527f626c65206e6f646500000000000000000000000000000000000000000000000060648201526084016102bd565b508061182581612f50565b915050611017565b5060405162461bcd60e51b815260206004820152602560248201527f4d65726b6c65547269653a2072616e206f7574206f662070726f6f6620656c6560448201527f6d656e747300000000000000000000000000000000000000000000000000000060648201526084016102bd565b6040805180820190915260008082526020820152600082511161193a5760405162461bcd60e51b815260206004820152604a60248201527f524c505265616465723a206c656e677468206f6620616e20524c50206974656d60448201527f206d7573742062652067726561746572207468616e207a65726f20746f206265606482015269206465636f6461626c6560b01b608482015260a4016102bd565b50604080518082019091528151815260209182019181019190915290565b6060600080600061196885611d04565b91945092509050600081600181111561198357611983612fc6565b146119f65760405162461bcd60e51b815260206004820152603960248201527f524c505265616465723a206465636f646564206974656d207479706520666f7260448201527f206279746573206973206e6f7420612064617461206974656d0000000000000060648201526084016102bd565b611a008284612f3d565b855114611a755760405162461bcd60e51b815260206004820152603460248201527f524c505265616465723a2062797465732076616c756520636f6e7461696e732060448201527f616e20696e76616c69642072656d61696e64657200000000000000000000000060648201526084016102bd565b611a84856020015184846125c6565b95945050505050565b606061065e8484600085612667565b805160609060008167ffffffffffffffff811115611abc57611abc612e0b565b604051908082528060200260200182016040528015611b0157816020015b6040805180820190915260608082526020820152815260200190600190039081611ada5790505b50905060005b82811015611b83576040518060400160405280868381518110611b2c57611b2c612f27565b60200260200101518152602001611b5b878481518110611b4e57611b4e612f27565b602002602001015161274e565b815250828281518110611b7057611b70612f27565b6020908102919091010152600101611b07565b509392505050565b606080604051905082518060011b603f8101601f1916830160405280835250602084016020830160005b83811015611be3578060011b82018184015160001a8060041c8253600f811660018301535050600101611bb5565b509295945050505050565b60606020826000015110611c0a57611c0582611958565b610e60565b610e6082612761565b6060610e60611c3283602001516000815181106112b2576112b2612f27565b611b8b565b606082518210611c565750604080516020810190915260008152610e60565b610e468383848651611c689190612ddf565b612777565b60008060008351855110611c82578351611c85565b84515b90505b8082108015611cf45750838281518110611ca457611ca4612f27565b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916858381518110611ce357611ce3612f27565b01602001516001600160f81b031916145b15611b8357816001019150611c88565b600080600080846000015111611d955760405162461bcd60e51b815260206004820152604a60248201527f524c505265616465723a206c656e677468206f6620616e20524c50206974656d60448201527f206d7573742062652067726561746572207468616e207a65726f20746f206265606482015269206465636f6461626c6560b01b608482015260a4016102bd565b6020840151805160001a607f8111611dba5760006001600094509450945050506125bf565b60b78111611f64576000611dcf608083612ddf565b905080876000015111611e705760405162461bcd60e51b815260206004820152604e60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e20737472696e67206c656e6774682060648201527f2873686f727420737472696e6729000000000000000000000000000000000000608482015260a4016102bd565b6001838101516001600160f81b0319169082141580611eb957507f80000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610155b611f515760405162461bcd60e51b815260206004820152604d60248201527f524c505265616465723a20696e76616c6964207072656669782c2073696e676c60448201527f652062797465203c203078383020617265206e6f74207072656669786564202860648201527f73686f727420737472696e672900000000000000000000000000000000000000608482015260a4016102bd565b50600195509350600092506125bf915050565b60bf8111612232576000611f7960b783612ddf565b90508087600001511161201a5760405162461bcd60e51b815260206004820152605160248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f74206265203e207468616e206c656e677468206f6620737472696e67206c656e60648201527f67746820286c6f6e6720737472696e6729000000000000000000000000000000608482015260a4016102bd565b60018301516001600160f81b03191660008190036120c65760405162461bcd60e51b815260206004820152604a60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f74206e6f74206861766520616e79206c656164696e67207a65726f7320286c6f60648201527f6e6720737472696e672900000000000000000000000000000000000000000000608482015260a4016102bd565b600184015160088302610100031c603781116121705760405162461bcd60e51b815260206004820152604860248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e20353520627974657320286c6f6e6760648201527f20737472696e6729000000000000000000000000000000000000000000000000608482015260a4016102bd565b61217a8184612f3d565b8951116122155760405162461bcd60e51b815260206004820152604c60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e20746f74616c206c656e677468202860648201527f6c6f6e6720737472696e67290000000000000000000000000000000000000000608482015260a4016102bd565b612220836001612f3d565b97509550600094506125bf9350505050565b60f781116122f957600061224760c083612ddf565b9050808760000151116122e85760405162461bcd60e51b815260206004820152604a60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e206c697374206c656e67746820287360648201527f686f7274206c6973742900000000000000000000000000000000000000000000608482015260a4016102bd565b6001955093508492506125bf915050565b600061230660f783612ddf565b9050808760000151116123a75760405162461bcd60e51b815260206004820152604d60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f74206265203e207468616e206c656e677468206f66206c697374206c656e677460648201527f6820286c6f6e67206c6973742900000000000000000000000000000000000000608482015260a4016102bd565b60018301516001600160f81b03191660008190036124535760405162461bcd60e51b815260206004820152604860248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f74206e6f74206861766520616e79206c656164696e67207a65726f7320286c6f60648201527f6e67206c69737429000000000000000000000000000000000000000000000000608482015260a4016102bd565b600184015160088302610100031c603781116124fd5760405162461bcd60e51b815260206004820152604660248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e20353520627974657320286c6f6e6760648201527f206c697374290000000000000000000000000000000000000000000000000000608482015260a4016102bd565b6125078184612f3d565b8951116125a25760405162461bcd60e51b815260206004820152604a60248201527f524c505265616465723a206c656e677468206f6620636f6e74656e74206d757360448201527f742062652067726561746572207468616e20746f74616c206c656e677468202860648201527f6c6f6e67206c6973742900000000000000000000000000000000000000000000608482015260a4016102bd565b6125ad836001612f3d565b97509550600194506125bf9350505050565b9193909250565b606060008267ffffffffffffffff8111156125e3576125e3612e0b565b6040519080825280601f01601f19166020018201604052801561260d576020820181803683370190505b5090508260000361261f579050610e46565b600061262b8587612f3d565b90506020820160005b8581101561264c578281015182820152602001612634565b8581111561265b576000868301525b50919695505050505050565b6060824710156126df5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102bd565b600080866001600160a01b031685876040516126fb9190613000565b60006040518083038185875af1925050503d8060008114612738576040519150601f19603f3d011682016040523d82523d6000602084013e61273d565b606091505b5091509150610659878383876128e3565b6060610e6061275c8361189c565b61295c565b6060610e608260200151600084600001516125c6565b60608182601f0110156127cc5760405162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f7700000000000000000000000000000000000060448201526064016102bd565b82828401101561281e5760405162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f7700000000000000000000000000000000000060448201526064016102bd565b818301845110156128715760405162461bcd60e51b815260206004820152601160248201527f736c6963655f6f75744f66426f756e647300000000000000000000000000000060448201526064016102bd565b60608215801561289057604051915060008252602082016040526128da565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156128c95780518352602092830192016128b1565b5050858452601f01601f1916604052505b50949350505050565b6060831561295257825160000361294b576001600160a01b0385163b61294b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102bd565b508161065e565b61065e8383612b8c565b6060600080600061296c85611d04565b91945092509050600181600181111561298757612987612fc6565b146129fa5760405162461bcd60e51b815260206004820152603860248201527f524c505265616465723a206465636f646564206974656d207479706520666f7260448201527f206c697374206973206e6f742061206c697374206974656d000000000000000060648201526084016102bd565b8451612a068385612f3d565b14612a795760405162461bcd60e51b815260206004820152603260248201527f524c505265616465723a206c697374206974656d2068617320616e20696e766160448201527f6c696420646174612072656d61696e646572000000000000000000000000000060648201526084016102bd565b6040805160208082526104208201909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081612a925790505090506000845b8751811015612b8057600080612b056040518060400160405280858d60000151612ae99190612ddf565b8152602001858d60200151612afe9190612f3d565b9052611d04565b509150915060405180604001604052808383612b219190612f3d565b8152602001848c60200151612b369190612f3d565b815250858581518110612b4b57612b4b612f27565b6020908102919091010152612b61600185612f3d565b9350612b6d8183612f3d565b612b779084612f3d565b92505050612abf565b50815295945050505050565b815115612b9c5781518083602001fd5b8060405162461bcd60e51b81526004016102bd919061301c565b60008083601f840112612bc857600080fd5b50813567ffffffffffffffff811115612be057600080fd5b6020830191508360208260051b8501011115612bfb57600080fd5b9250929050565b600080600060408486031215612c1757600080fd5b83359250602084013567ffffffffffffffff811115612c3557600080fd5b612c4186828701612bb6565b9497909650939450505050565b80356001600160a01b0381168114612c6557600080fd5b919050565b60008060408385031215612c7d57600080fd5b612c8683612c4e565b9150612c9460208401612c4e565b90509250929050565b600060208284031215612caf57600080fd5b610e4682612c4e565b60008060008060608587031215612cce57600080fd5b84359350612cde60208601612c4e565b9250604085013567ffffffffffffffff811115612cfa57600080fd5b612d0687828801612bb6565b95989497509550505050565b600080600080600060a08688031215612d2a57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060408385031215612d6057600080fd5b50508035926020909101359150565b600060208284031215612d8157600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610e6057610e60612d88565b634e487b7160e01b600052601260045260246000fd5b600082612dda57612dda612db5565b500490565b81810381811115610e6057610e60612d88565b600060208284031215612e0457600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612e4a57612e4a612e0b565b604052919050565b600067ffffffffffffffff80841115612e6d57612e6d612e0b565b8360051b6020612e7e818301612e21565b868152918501918181019036841115612e9657600080fd5b865b84811015612f1b57803586811115612eb05760008081fd5b8801601f3681830112612ec35760008081fd5b813588811115612ed557612ed5612e0b565b612ee6818301601f19168801612e21565b91508082523687828501011115612efd5760008081fd5b80878401888401376000908201870152845250918301918301612e98565b50979650505050505050565b634e487b7160e01b600052603260045260246000fd5b80820180821115610e6057610e60612d88565b600060018201612f6257612f62612d88565b5060010190565b600060208284031215612f7b57600080fd5b81518015158114610e4657600080fd5b600060ff831680612f9e57612f9e612db5565b8060ff84160691505092915050565b60ff8281168282160390811115610e6057610e60612d88565b634e487b7160e01b600052602160045260246000fd5b60005b83811015612ff7578181015183820152602001612fdf565b50506000910152565b60008251613012818460208701612fdc565b9190910192915050565b602081526000825180602084015261303b816040850160208701612fdc565b601f01601f1916919091016040019291505056fea2646970667358221220cb3afb6ad98fc01088ef7200aef0636f86567be64752bdfdd90486bed508c92964736f6c63430008130033";

type MerkleBoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleBoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleBox__factory extends ContractFactory {
  constructor(...args: MerkleBoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _rewardToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_rewardToken, overrides || {});
  }
  override deploy(
    _rewardToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_rewardToken, overrides || {}) as Promise<
      MerkleBox & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MerkleBox__factory {
    return super.connect(runner) as MerkleBox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleBoxInterface {
    return new Interface(_abi) as MerkleBoxInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MerkleBox {
    return new Contract(address, _abi, runner) as unknown as MerkleBox;
  }
}
