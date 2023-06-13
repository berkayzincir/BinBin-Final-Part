import { BaseError } from 'viem'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button, Navbar, NavbarBrand,  NavItem,Nav } from 'react-bootstrap'
export function Connect() {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div>
      <div>
        {isConnected && (
          <Button style={{ backgroundColor:"#3dbcc8", borderColor:"#3dbcc8"}} onClick={() => disconnect()}>
            Disconnect from {connector?.name}
          </Button>
        )}

        {connectors 
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <Button style={{ backgroundColor:"#3dbcc8", borderColor:"#3dbcc8", marginLeft:10 }} color="success" key={x.id} onClick={() => connect({ connector: x })}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </Button>
          ))}
      </div>

      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  )
}
