import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../image/SystemIcon.svg';
import backIcon from '../image/SyIcon.svg';


function Detail_Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div style={headerStyle}>
      <button onClick={goBack}><img src={backIcon} alt="홈 아이콘" width="24" height="24" /></button>
      
      <Link to="/">
      <img src={homeIcon} alt="홈 아이콘" width="24" height="24" />
      </Link>
    </div>
  )
}

export default Detail_Header;
