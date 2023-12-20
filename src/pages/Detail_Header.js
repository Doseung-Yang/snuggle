import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../image/SystemIcon.svg';
import backIcon from '../image/SyIcon.svg';

function Detail_Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // 모달 팝업의 상태를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(true); // 초기값을 true로 설정

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    position: 'fixed', 
    width: '100%', 
    backgroundColor: '#fff', 
    zIndex: 1, 
  };

  const supportButtonStyle = {
    width: "auto", 
    height: 40, 
    paddingLeft: 10, 
    paddingRight: 10,
    background: '#00C4C4', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 6, 
    display: 'inline-flex', 
    border: 'none',
    position: 'fixed', 
    bottom: 3, 
    zIndex: 9998, // 모달 팝업보다 1만큼 작게 설정
    left: 0, 
    right: 0, 
    textAlign: 'center', 
    lineHeight: 3
  }

  // 모달 팝업을 닫는 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div style={headerStyle}>
        <button onClick={goBack} style={{background: 'transparent', border: 'none'}}>
          <img src={backIcon} alt="홈 아이콘" width="24" height="24" />
        </button>
        
        <Link to="/">
          <img src={homeIcon} alt="홈 아이콘" width="24" height="24" />
        </Link>
      </div>

      {/* 응원하기 버튼 */}
      <button style={supportButtonStyle}>
        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 5, wordWrap: 'break-word'}}>응원하기</div>
      </button>

      {/* 모달 팝업 */}
      {isModalOpen && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999}}>
          <div style={{position: 'relative', width: '300px', height: '200px', margin: '0 auto', marginTop: '200px', backgroundColor: 'white'}}>
            <button onClick={closeModal} style={{position: 'absolute', right: '10px', top: '10px'}}>
              X
            </button>
            <p>앱을 다운로드 받으세요!</p>
            <button className="x"style={{marginTop: '80px',background: '#00C4C4',color: 'white', border: 'white', borderRadius: 5}}>앱에서 보기</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail_Header;
