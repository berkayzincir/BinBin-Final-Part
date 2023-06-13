import { useContractReads } from 'wagmi'
import ABI from "./BinBins.json"




export function useContract() {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getUser',
      },
      {
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'setOwner',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addUser',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'editBinBinMetadata',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'editBinBinStatus',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'checkOut',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'CheckIn',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'deposit',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'makepayment',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'withdrawBalance',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'withdrawOwnerBalance',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getOwner',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getBinBinByStatus',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getBalance',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'addBinBin',
      },{
        address: '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512',
        abi: [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Balance",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "BinBinMetadataEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "BinBinStatusEdited",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "CheckInEvent",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "BinBinId",
                  "type": "uint256"
                }
              ],
              "name": "Checkout",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "PaymentMade",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "lastname",
                  "type": "string"
                }
              ],
              "name": "UserAdded",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "CheckIn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rent",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sale",
                  "type": "uint256"
                }
              ],
              "name": "addBinBin",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_lastName",
                  "type": "string"
                }
              ],
              "name": "addUser",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "checkOut",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "imgUrl",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "rentFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "saleFee",
                  "type": "uint256"
                }
              ],
              "name": "editBinBinMetadata",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "enum BinBins.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "name": "editBinBinStatus",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "getBinBin",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "enum BinBins.Status",
                  "name": "_status",
                  "type": "uint8"
                }
              ],
              "name": "getBinBinByStatus",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "id",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "imgUrl",
                      "type": "string"
                    },
                    {
                      "internalType": "enum BinBins.Status",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentFee",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "saleFee",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.BinBin[]",
                  "name": "",
                  "type": "tuple[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getCurrentCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTotalPayments",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "walletAddress",
                  "type": "address"
                }
              ],
              "name": "getUser",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "walletAddress",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "lastname",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "rentedBinBinId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "balance",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "debt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "start",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct BinBins.User",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "makePayment",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_newOwner",
                  "type": "address"
                }
              ],
              "name": "setOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdrawOwnerBalance",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        functionName: 'getTotalPayments',
      },
    ],
  })}