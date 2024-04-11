import Nav from 'react-bootstrap/Nav';
import "./css/Navtab.css"

function FillExample() {
  return (
    <>
    <Nav variant="pills" className='Nav' defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Dashboard</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Organisation Structure</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Organisation Structure</Nav.Link>
    </Nav.Item> <br/>
    {/* <Nav.Item>
      <Nav.Link eventKey="link-3">Option 3</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-4">Option 4</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-5" >
        Option 5
      </Nav.Link>
    </Nav.Item> */}
  </Nav>
  </>
  );
}

export default FillExample;
