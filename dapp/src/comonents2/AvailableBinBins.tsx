
import configs from "../hooks/BinBins.json";
import {useContractRead,useContractWrite} from "wagmi"
import { Button, Card, Col, Row } from 'react-bootstrap'

const AvailableBinBins = ({ name, id, image, saleFee, rentFee, binbinStatus,due }) => {




  let binbinName = name.toString()
  let ids = Number(id);
  let salefee = Number(saleFee)
  let rentfee = Number(rentFee)


  const { write: checkOut } = useContractWrite({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'checkOut',
    args: [id],
    onError: (err) => { console.error(err) }

  });
  const { data: checkIn } = useContractRead({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'CheckIn',
    onError: (err) => { console.error(err) }

  });
  

  const handleCheckOut = async () => {
    const res = await checkOut({args:[id]});
    console.log(res);
  };

  

  const handleCheckIn = async () => {
    const res = await checkIn;
    console.log(res);
  };




  return (
    <Row style={{margin:10}}>
        <Col>
    
        <Card style={{ width: '40rem', marginTop:25 }}>
      <Card.Img variant="top" src={image} style={{height:450}}/>
      <Card.Body>
        <Card.Title>  {name} - id: {ids}</Card.Title>
        <Card.Text>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            <p>BinBin Fee : {rentfee} $</p>
            <p>Sale Fee: {salefee} $</p>
            <p>{binbinStatus === 2 ? "Available" : "Not Available"}</p>
          </h3>
        </Card.Text>
        <Button
            disabled={due > 0 ? true : false}
            onClick={() => handleCheckOut(ids)}
            style={{marginRight:20, backgroundColor:"#3dbcc8", border:"#3dbcc8"}}
          >
            Check In
          </Button>
          <Button style={{backgroundColor:"#3dbcc8", border:"#3dbcc8"}}
            disabled={due > 0 ? true : false}
            onClick={() => handleCheckIn()}
          >
            Check Out
          </Button>
      </Card.Body>
    </Card>
   
          
 
</Col></Row>
    
  );
};


export default AvailableBinBins