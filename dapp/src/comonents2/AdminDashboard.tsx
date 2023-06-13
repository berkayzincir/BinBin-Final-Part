import React from 'react'
import  { useState, useEffect } from "react";
import { UseContractReadConfig,useContractRead,useContractWrite } from 'wagmi';
import configs from "../../ContractConfig.json";
import { Button,Card,Row,Col,Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
function AdminDashboard({contractaddress}) {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [rent, setRent] = useState("");
    const [sale, setSale] = useState("");
    const [newName, setNewName] = useState("");
    const [newUrl, setNewUrl] = useState("");
    const [status, setStatus] = useState(null);
    const [newRent, setNewRent] = useState("");
    const [newSale, setNewSale] = useState("");
    const [totalPayments, setTotalPayments] = useState(null);
    const [withdrawBalance, setWithdrawBalance] = useState(null);
    const [ownerAddress, setOwnerAddress] = useState(null);
    const [currentOwner, setCurrentOwner] = useState(null);

    const { data:data2, write:addBinBin } = useContractWrite({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'addBinBin',
        args: [{name},{url},{rent},{sale}]
      })

      const {  write:withdrawOwnerBalance } = useContractWrite({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'withdrawOwnerBalance',
        args: [{withdrawBalance}]
      })
      const { write:editBinBinMetadata } = useContractWrite({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'editBinBinMetadata',
        args: [{id},{name},{url},{rent},{sale}]
      })

      const { write:editBinBinStatus } = useContractWrite({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'editBinBinStatus',
        args: [{id},{status}]
      })


      const {  write:setOwner } = useContractWrite({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'setOwner',
        args: [ownerAddress]
      })
       const { data: getOwner } = useContractRead({
      address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
      abi : configs.abi,
      functionName: 'getOwner',
      onError: (err) => { console.error(err) }
 
    });

    const { data: getTotalPayments } = useContractRead({
        address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
        abi : configs.abi,
        functionName: 'getTotalPayments',
        onError: (err) => { console.error(err) }
   
      });

      editBinBinStatus
    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
        let result = await addBinBin({
            args: [[name], [url], [rent], [sale] ]
          })
        if (result) {
          console.log("BinBin added successfully");
        }
        console.log(result);
      };
    


      const handleWithdraw = async (e) => {
        e.preventDefault();
        try {
          let result = await withdrawOwnerBalance({
            args: [[withdrawBalance]]
          });
          if (result) {
            console.log("Withdrawn successfully" + result);
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
    

      const editBinBinData = async (e) => {
        e.preventDefault();
      
        try {
          let result = await editBinBinMetadata({ args:[[id],[newName],[newUrl],[newRent],[newSale]]});
          
          if (result) {
            console.log("BinBin edited successfully" + result);
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
    
      const editBinBinStatusData = async (e) => {
        e.preventDefault();
        try {
          let result = await editBinBinStatus({ args:[[id],[status]]});
          if (result) {
            console.log("BinBin status edited successfully" + result);
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleSetOwner = async (e) => {
        e.preventDefault();
        try {
          let result = await setOwner({args:[ownerAddress]});
          if (result) {
            console.log("Owner set successfully" + result);
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
    
      
      useEffect(() => {
        const fetchInfo = async () => {
          const owner = await getOwner;
          const totalRevenue = await getTotalPayments;
          console.log(totalRevenue);
          setTotalPayments(totalRevenue);
          setCurrentOwner(owner);
        };
        fetchInfo();
      }, []);


  return (
    <div style={{marginTop: 200}} style={{backgroundColor:"#f6f6f6", paddingBottom:200}}> 
        <div className="">
    <div className="">
        <div style={{textAlign:'center',marginBottom:100, marginTop:100}}><h1 style={{textAlign:'center',marginBottom:100, paddingTop:100}}>THIS IS ADMIN PANEL</h1>
        <p>You can add BinBin, edit BinBin, withdraw Owner Balance, set New Owner, edit BinBin Status easily</p></div>
        
    <Container>
    <Row>
        <Col><Card className="align-items-center">
      <Card.Header className="align-items-center">Add BinBin</Card.Header>
      <Card.Body className="align-items-center">
        <Card.Title style={{textAlign: "center"}}>Add BinBin</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
        <form onSubmit={handleSubmit}>
        <div>
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            placeholder="BinBin Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="url">
            URL:{" "}
          </label>
          <input
            type="text"
            placeholder="BinBin Picture Url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="rent">
            Rent:
          </label>
          <input
            type="text"
            placeholder="Rent Fee"
            id="rent"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
        </div>
        <div>
          <label className="text-white" htmlFor="sale">
            Sale:
          </label>
          <input
            type="text"
            placeholder="Sale Fee"
            id="sale"
            value={sale}
            onChange={(e) => setSale(e.target.value)}
          />
        </div>
        <Button
          className=""
          type="submit"
        >
          add BinBin
        </Button>
      </form>
        </Card.Text>
      </Card.Body>
    </Card></Col>
    <Col><Card className="align-items-center" style={{height:305}}>
      <Card.Header className="align-items-center">Withdraw Balance</Card.Header>
      <Card.Body className="align-items-center">
        <Card.Title style={{textAlign: "center"}}>Withdraw Balance</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
        <span className="">
        {" "}
        Total Payment : {totalPayments}{" "}
        <input style={{marginTop:30}}
          type="number"
          placeholder="Withdraw Balance"
          className="text-black"
          onChange={(e) => {
            setWithdrawBalance(e.target.value);
          }}
        />
        <Button
          onClick={handleWithdraw}
          style={{marginTop:40}}
          className=""
        >
          Withdraw Balance
        </Button>
      </span>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col><Card className="align-items-center" style={{height:305}}>
      <Card.Header className="align-items-center">Set Owner</Card.Header>
      <Card.Body className="align-items-center">
        <Card.Title style={{textAlign: "center"}}>Set Owner</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
        <div className="">
        <span className="">
          Current Owner : <span className="">{currentOwner}</span>{" "}
        </span>
        <input
        style={{marginTop:30}}
          placeholder="New Owner Address"
          className="text-black"
          
          onChange={(e) => {
            setOwnerAddress(e.target.value);
            
          }}
          
        />
        <br></br>
        <Button
          onClick={handleSetOwner}
          style={{marginTop:20}}
        >
          Set New Owner
        </Button>
      </div>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

    
      
    <Container>
    <Row>
        <Col><Card style={{marginTop: 100}}>
      <Card.Header style={{textAlign: "center"}}>Edit BinBin</Card.Header>
      <Card.Body className="align-items-center">
        <Card.Title style={{textAlign: "center"}}>Edit BinBin</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
        <form className="" onSubmit={editBinBinData}>
        <div>
          <label className="text-white" htmlFor="name">
            Id:
          </label>
          <input
            type="text"
            placeholder="BinBin Id"
            id="name"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            placeholder=""
            className="text-black"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="url">
            URL:{" "}
          </label>
          <input
            type="text"
            placeholder="New BinBin URL"
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="rent">
            Rent:
          </label>
          <input
            type="text"
            placeholder=""
            onChange={(e) => setNewRent(e.target.value)}
          />
        </div>
        <div>
          <label className="" htmlFor="sale">
            Sale:
          </label>
          <input
            type="text"
            placeholder="New Sale Fee"
            onChange={(e) => setNewSale(e.target.value)}
          />
        </div>
        <Button
          className=""
          type="submit"
        >
          Edit BinBin Metadata
        </Button>
      </form>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col><Card className="align-items-center" style={{height:305, marginTop:100}}>
      <Card.Header className="align-items-center">Edit BinBin Status</Card.Header>
      <Card.Body className="align-items-center">
        <Card.Title style={{textAlign: "center"}}>Edit BinBin Status</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
        <form onSubmit={editBinBinStatusData}>
        <div>
          <label className="">Id:</label>
          <input
            type="number"
            placeholder="BinBin Id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label className="t">Status:</label>
          <input
            type="number"
            placeholder="BinBin Status"
            className="text-black"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <span className="">
          0 = retired  <br /> 1 = InUse 
          <br /> 2 = Available
        </span>
        <br></br>
        <Button
          className=""
          type="submit"
          style={{marginTop:10}}
        >
          Edit BinBin  Status
        </Button>
      </form>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
      
      
      
    </div>
  </div></div>
    
  )
}

export default AdminDashboard








