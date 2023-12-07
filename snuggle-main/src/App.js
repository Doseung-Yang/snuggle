import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet, useLocation} from 'react-router-dom';
import Detail from './pages/Detail';
import Detail_Header from './pages/Detail_header';
import axios from 'axios'
import image2 from './image/image56.png';
import image3 from './image/catt.png';
import image4 from './image/pig.png';
const images = [null, image2, image3, image4];


// ... 이전 코드 생략 ...

function App() {
  let [shoes, setShoes] = useState(data);
  let location = useLocation();

  return (
    <div className='App'>
      {
        location.pathname.startsWith('/detail/') ?
        <Detail_Header /> :
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">wadiz.io</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">상세페이지</Nav.Link>
              <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      }

      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/*" element={<Detail shoes={shoes} />} />
      </Routes>

    </div>
    
  );
}

function Home({shoes}) {
  return (
    <div className="container">
      <div className="row">
        {
          shoes.map((shoe, i) => (
            <Card shoe={shoe} i={i} key={i} />
          ))
        }
      </div>
    </div>
  );
}

function Card({ shoe }) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${shoe.id}`} style={{display: 'inline-block'}}>
        <img src={images[shoe.id+1]} width="50%" />
        <h4>{shoe.title}</h4>
        <p>{shoe.price}</p>
      </Link>
    </div>
  );
}



export default App;