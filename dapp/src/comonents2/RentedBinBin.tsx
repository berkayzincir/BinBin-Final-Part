
import configs from "../hooks/BinBins.json";
import {useContractRead,useContractWrite} from "wagmi"
import { Button, Card, Col, Row } from 'react-bootstrap'

const RentedBinBin = ({ RentedBinBinImg,RentedBinBinName,RentedBinBinRentFee,RentedBinBinSaleFee,RentedBinBinId}) => {

   


  let binbinName = RentedBinBinName.toString()
  let image = RentedBinBinImg.toString()
  let id = Number(RentedBinBinId);
  let salefee = Number(RentedBinBinRentFee)
  let rentfee = Number(RentedBinBinSaleFee)


  const { write: checkOut } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'checkOut',
    args: [id],
    onError: (err) => { console.error(err) }

  });

  const { write: checkIn } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'CheckIn',
    onError: (err) => { console.error(err) }

  });
  

  const handleCheckOut = async () => {
    const res = await checkOut({args:[id]});
    console.log(res);
  };

  

  const handleCheckIn =  () => {
   
    const res =  checkIn;
    console.log(res);
  };





  return (
    <Row  style={{textAlign: "center", marginLeft:100}}>
        <Col>
    
        <Card style={{ width: '40rem', marginTop:25 }}>
      <Card.Img variant="top" src={image} style={{height:450}}/>
      <Card.Body>
        <Card.Title>  {binbinName} - id: {id}</Card.Title>
        <Card.Text>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            <p>BinBin Fee : {rentfee} $</p>
            <p>Sale Fee: {salefee} $</p>
          </h3>
        </Card.Text>
        <Button
       
            onClick={() => handleCheckOut(id)}
            style={{marginRight:20, backgroundColor:"#3dbcc8", border:"#3dbcc8"}}
          >
            Check Out
          </Button>
          <Button style={{backgroundColor:"#3dbcc8", border:"#3dbcc8"}}
            onClick={checkIn}
          >
            Check In
          </Button>
      </Card.Body>
    </Card>
   
          
 
</Col></Row>
    
  );
};


export default RentedBinBin