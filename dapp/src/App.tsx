import { useAccount, useContractRead, UseContractReadsConfig } from 'wagmi'
import {useState, useEffect} from "react";
import { useContractWrite } from 'wagmi';
import configs from "../ContractConfig.json";
import BinBinCompenent from './comonents2/BinBinCompenent';
import Header from './comonents2/Header';
import AvailableBinBins from './comonents2/AvailableBinBins';
import AdminDashboard from "./comonents2/AdminDashboard"
import { Button, Card, Col, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"



import Web3 from "web3";
import RentedBinBin from './comonents2/RentedBinBin';
import AccountInfo from './comonents2/AccountInfo';
const web3 = new Web3();
const emptyAddress = "0x0000000000000000000000000000000000000000"
const contractaddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
export function App() {
  const { address, isConnected, isDisconnected } = useAccount()
  const [address1, setAddress1] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [availableBinBins, setAvailableBinBins] = useState([]);
  const [RentedBinBinName, setRentedBinBinName] = useState("")
  const [RentedBinBinImg, setRentedBinBinImg] = useState("")
  const [RentedBinBinSaleFee, setRentedBinBinSaleFee] = useState(0)
  const [RentedBinBinRentFee, setRentedBinBinRentFee] = useState(0)
  const [RentedBinBinId, setRentedBinBinId] = useState(0)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [userCredit, setUserCredit] = useState(0);
  const [due, setDue] = useState(0);
  const [isAvailable, setIsAvailable] = useState("You can rent a binbin");
  const [rideMins, setrideMins] = useState(0);


 
    const { data: dataTwo } = useContractRead({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'getUser',
      args: [address],
      onError: (err) => { console.error(err) }
 
    });
    let isAUser = [dataTwo]
    const { data: getOwner } = useContractRead({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'getOwner',
      onError: (err) => { console.error(err) }
 
    });
    const { data:getBinBinByStatus } = useContractRead({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'getBinBinByStatus',
      args: ["2"]
    })

    const { data:getBinBin } = useContractRead({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'getBinBin',
      args: [isAUser[0].rentedBinBinId]
    })
    // Perform a check before fetching contract data.


    const { data, isLoading, isSuccess, write } = useContractWrite({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'addUser',
    })
 
    const { data:data2, write:setOwner } = useContractWrite({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'setOwner',
      args: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]
    })



    useEffect(() => {
      let handleInit = async () => {
        let isAUser = await [dataTwo]
        if (address !== emptyAddress) {
          console.log(isAUser)
          if (isAUser[0].lastname !== '') {
            setLoggedIn(true);
            setUserCredit(Number(isAUser[0].balance));
          }
          setUserName(isAUser[0].name);
          setLastName(isAUser[0].lastname);
          setAddress1(isAUser[0].walletAddress);
          let userDue = (Number(isAUser[0].debt));
         
          setDue(userDue);
          console.log(userDue)
          setOwner
          let address1 = address
          let owner = await getOwner;
          console.log(address1)
          console.log(getOwner)
          if (address1 === owner) {
            setisAdmin(true);
          }

          // get binbins
       
          let AvailableBinBins = await getBinBinByStatus
          availableBinBins.push(...AvailableBinBins);
          let rentedBinBin = await getBinBin
          setRentedBinBinImg(rentedBinBin.imgUrl);
          setRentedBinBinName(rentedBinBin.name);
          setRentedBinBinRentFee(rentedBinBin.rentFee);
          setRentedBinBinSaleFee(rentedBinBin.saleFee);
          setRentedBinBinId(rentedBinBin.id)
          
          if (rentedBinBin !== 0) {
        
          }
    
          if (rentedBinBin !== 0) {
            setIsAvailable(`Rented: ${rentedBinBin.name} - Id :${rentedBinBin.id}`);
          }
    
          let rideMins = 0;
          if (isAUser[0].rentedBinBinId !== "0") {
          rideMins = Math.floor(
              Math.floor(Date.now() / 1000 - Number(isAUser[0].start)) / 60
            )
          }
          setrideMins(rideMins);
        }
      };
      handleInit();
 
    }, [address]);
    
const handleNameChange = (e) => {
  setName(e.target.value)
}

const handleLastNameChange = (e) => {
  setLastName(e.target.value)
}

const HandleClick = (e) => {
  e.preventDefault();
    write({
      args: [[name], [lastName]]
    })
  }





  return (
    <>


      {isConnected && (
        <>
  
          <div>
        <Header loggedIn={loggedIn} name={name} lastName={lastName} address={address}/>
        {loggedIn ? (

           
          
            <div>
              
                <div>
                </div>
                <div>
    
                </div>
                <Row style={{paddingTop:30, display:"flex", backgroundColor:"gray"}}>
                      <h1 style={{textAlign:"center", marginTop:250, marginLeft:800, color:"white"}}>Your Rented BinBin is :</h1>
                      <AccountInfo
              userCredit={userCredit}
              due={due}
              rideMins={rideMins}
              isAvailable={isAvailable}/>
                      <Col>
                      <RentedBinBin
                          RentedBinBinRentFee = {RentedBinBinRentFee}
                          RentedBinBinSaleFee= {RentedBinBinSaleFee}
                          RentedBinBinImg= {RentedBinBinImg}
                          RentedBinBinName= {RentedBinBinName}
                          RentedBinBinId={RentedBinBinId}
                        />
                      </Col>
                    </Row>
                  {/*BinBin Section*/}
                <h1 style={{textAlign:"center", marginTop:200}}>Do You Want Rent a BinBin?</h1>
            <Row style={{textAlign:"center", marginTop:200, marginLeft:400} }>
            
            {availableBinBins.length>0 ? (
                    availableBinBins.map((binbin,idx)=>(
                      <div key={idx}>
                        {console.log(idx)}
                        <Col >
     
                        <AvailableBinBins
                          binbinStatus ={binbin.status}
                          rentFee = {binbin.rentFee}
                          saleFee= {binbin.saleFee}
                          image= {binbin.imgUrl}
                          id = {binbin.id}
                          name= {binbin.name}
                          due = {due}
                        /></Col>
                        
                        </div>
                    ))

                  

                  ):(
                    <div>
                      <div> BinBins are Loading...</div>
                    </div>
                  )}
            </Row>
                    
                </div>
            

          ) : (
            <Card>
            <div style={{zIndex:10, position:"absolute", marginLeft:1000, marginTop:200, paddingBottom:500,textAlign:"center"}}>
              <h1 style={{marginBottom:75}}>Dou You Want to Join This Travel?</h1>
              
              <input
                  type="text"
                  style={{width:600}}
                  onChange={handleNameChange}
                placeholder="Name"
                
              />
            
              <p>
      
              </p>
   
              <input
              style={{width:600}}
                type="text"
                onChange={handleLastNameChange}
                placeholder="Lastname"
              />
              <p>
              </p>
            <Button
            style={{width:400}}
        onClick={HandleClick}
      >
        Register
      </Button>
 </div>
        </Card>)}
  </div>
        </>
      )}
 
    
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      {isAdmin && <AdminDashboard />}
    </>
  )
}
