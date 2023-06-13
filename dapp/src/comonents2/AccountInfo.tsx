import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Button, Card, Col, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useContractWrite,useContractRead } from 'wagmi';
import configs from "../../ContractConfig.json"









const AccountInfo = ({ userCredit, rideMins, due, isAvailable }) => {

  const [amount, setAmount] = useState(0)
  const {  write: makeDeposit } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'deposit',
    value: (amount) 
  })
  
  const {  write: withdraw } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'withdrawBalance',
    args: [amount]
  })
  
  const { write:payDue } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'makePayment',
  
  })

  return (
    <>
    <Row style={{marginTop:100, marginRight:1000,  display: "flex"}}>

<div style={{marginTop:0, marginLeft:1050,  display: "flex"}}>
        
        <label className="">
       <input 
            placeholder="BNB for deposit"
            className=""
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />

          <span style={{marginLeft:10}} className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            BNB
          </span>
          
        </label>
        <Button style={{marginLeft:10, backgroundColor:"#3dbcc8", borderColor: "#3dbcc8"}}
          onClick={makeDeposit}
          className="bg-gradient-to-r h-8 text-xl justify-center flex items-center from-pink-500 via-red-400 to-yellow-500 rounded-full  p-[10px]  focus:outline-none focus:ring active:text-opacity-75"
        >
          {" "}
          Deposit
        </Button>
        <Button style={{marginLeft:10, backgroundColor:"#3dbcc8", borderColor: "#3dbcc8"}}
          onClick={withdraw}
          className="bg-gradient-to-r h-8 text-xl justify-center flex items-center from-pink-500 via-red-400 to-yellow-500 rounded-full  p-[10px]  focus:outline-none focus:ring active:text-opacity-75"
        >
          Withdraw
        </Button>
        <Button style={{marginLeft:10, backgroundColor:"#3dbcc8", borderColor: "#3dbcc8"}}
          onClick={payDue}
          className="bg-gradient-to-r h-8 text-xl justify-center flex items-center from-pink-500 via-red-400 to-yellow-500 rounded-full  p-[10px]  focus:outline-none focus:ring active:text-opacity-75"
        >
          Pay Your Debt
        </Button>
      </div>
</Row>
      <Row style={{marginTop:50, marginLeft: 1000}}>
     
        <article style={{display:"flex", marginRight:20, textAlign:"center", padding: 30, width:200, height:100 }}  className="flex items-center justify-between gap-4 rounded-lg border  border-gray-100 bg-white p-6">

          <div >
          <Col><p className="text-2xl font-medium text-gray-900">{userCredit}</p>
            <p className="text-sm text-gray-500">BNB Credit</p></Col>
         
          </div>
        </article>
        <article style={{display:"flex", marginRight:20, textAlign:"center", padding: 30, width:200, height:100 }}  className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">

          <div>
            
            <p className="text-2xl font-medium text-gray-900">{due}</p>
            <p className="text-sm text-gray-500">BNB Due</p>
          </div>
        </article>
        <article  style={{display:"flex", marginRight:20, textAlign:"center", padding: 30, width:200, height:100 }} className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
        

          <div>
            <p className="text-2xl font-medium text-gray-900">{rideMins}</p>

            <p className="text-sm text-gray-500">Ride Mins</p>
          </div>
        </article>
        
      </Row>

      
    </>
  );
};

export default AccountInfo;