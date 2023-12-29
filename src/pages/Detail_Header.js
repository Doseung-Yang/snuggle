import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../image/rightbtn.svg';
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
    borderBottom: '0px solid #ddd',
    position: 'fixed', 
    width: '400px', 
    backgroundColor: 'transparent', 
    zIndex: 1, 
  };

  const supportButtonStyle = {
    width: "360px", 
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
    lineHeight: '40px',
    margin: 'auto',
    borderRadius: '4px'
    
  }

  const closeModal = () => setIsModalOpen(false);

  
  const openAppOrStore = () => {
    var scheme = 'wadiz://letz/detail/{프로젝트번호}'; // 앱 스키마
    var storeURL = 'https://apps.apple.com/kr/app/%EC%99%80%EB%94%94%EC%A6%88/id1107828621?l=enmt%3D8'; // 스토어 URL

    // 앱으로 이동
    window.location = scheme;

    // 앱이 없을 경우 스토어로 이동
    setTimeout(function() {
        window.location = storeURL;
    }, 500);
  }



  return (
    <>
      <div style={headerStyle}>
        <button onClick={goBack} style={{background: 'transparent', border: 'none'}}>
          <img src={backIcon} alt="홈 아이콘" width="24" height="24" />
        </button>
        
        <Link to="/">
          <img src={homeIcon} alt="홈 아이콘" width="90" height="90" />
        </Link>
      </div>

      {/* 응원하기 버튼 */}
      <button style={supportButtonStyle}>
        <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 5, wordWrap: 'break-word'}}>응원하기</div>
      </button>

      
      {isModalOpen && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: 9999}}>
          <div style={{position: 'relative', width: '350px', height: '100px', margin: '0 auto', marginTop: '1px', backgroundColor: 'white'}}>
            <button onClick={closeModal} style={{position: 'absolute', right: '10px', top: '10px'}}>
              X
            </button>
            <p>앱을 다운로드 받으세요!</p>
            <button 
                className="x"
                style={{marginTop: '30px', background: '#00C4C4', color: 'white', border: 'white', borderRadius: 5}}
                onClick={openAppOrStore} // 함수를 직접 연결
            >
                앱에서 보기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail_Header;
