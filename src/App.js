import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import React from 'react';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet, useLocation} from 'react-router-dom';
import Detail from './pages/Detail';
import Detail_Header from './pages/Detail_Header';
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
    <div className='background'>
      {
    <div className='App'>
      {
        location.pathname.startsWith('/detail/') ?
        <Detail_Header /> :
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">렛츠</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        }
        </div>
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
    <div className="col-12 shadow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #ddd', margin: '10px 0', borderRadius: '20px', width: '380px', marginLeft:'12px'}}>
      <Link to={`/detail/${shoe.id}`} style={{ width: '100%', height: '360px',textAlign: 'center',marginLeft: '-25px' }}>
        <img src={images[shoe.id+1]} style={{ width: '380px', height: '204.5px', marginLeft: '12px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
        <div style={{width: 380, height: 0, color: '#00C4C4',fontSize: 14, fontFamily: 'Pretendard',lineHeight: 2, wordWrap: 'break-word', textAlign: 'center'}}><p>{shoe.content}</p></div>
        <div style={{width: 380, hegiht: 0, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 1, wordWrap: 'break-word'}}><h4 className="pt-4">{shoe.title}</h4></div>
        <div style={{width: 380, height: 45, color: 'black', fontSize: 16, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 1, wordWrap: 'break-word', padding: 15, marginTop: '-15px',overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical'}}>{shoe.comment}</div>
      </Link>
    </div>
  );
}




export default App;