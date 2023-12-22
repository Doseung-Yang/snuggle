import { useParams } from "react-router-dom";
import styled from 'styled-components'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Detail_Header from "./Detail_Header.js";
import safeIcon from '../image/Frame.svg';
import rightIcon from '../image/rightSystemIcon.svg';

function Detail(props){
  let params = useParams();
  console.log(params);
  let id = parseInt(params['*']);
  let shoe = props.shoes.find(x => x.id === id);
  if (!shoe) {
    return <div>해당 프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="Detail_Header">
      <div className="row">
        <div className="col-md-12">
        <Carousel showThumbs={false}>
            {shoe.imageURL.map((url, index) => (
              <div key={index}>
                 <img className="respnsive-image" src={url} style={{width: '400px', height: 'auto', objectFit: 'cover', padding: '1px', display: 'block', margin: '0 auto'}} />
              </div>
            ))}
          </Carousel>
        </div>
        <div style={{width: 380, height: 0, color: '#00C4C4',fontSize: 14, fontFamily: 'Pretendard',lineHeight: 3, wordWrap: 'break-word'}}><p>{shoe.content}</p></div>
        <div style={{width: 380, hegiht: 0, color: 'black', fontSize: 24, fontFamily: 'Pretendard', lineHeight: 15, wordWrap: 'break-word', textAlign: "left", marginLeft:20}}><h5 className="pt-5">{shoe.title}</h5></div>
        <div style={{width: 380, height: 45, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 80, height: 210, color: '#212529', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word'}}>{shoe.makername}</div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
        <div style={{width: 150, color: '#ADB5BD', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word', paddingLeft: "25px"}}>진행 기간　{shoe.projectEndday}</div>
    </div>
</div>
        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6'}} /></div>

    

    <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.23, display: 'inline-flex'}}>
    <div style={{height: 46, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 14, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '9.23px', width: '100%', height: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px', height: '46px'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', height: '4px', alignSelf: 'stretch', marginLeft:15}}>
                    <div style={{width: '100%', height: '4px', background: '#DDE2E6', borderRadius: '20px'}} />
                    <div style={{width: '80%', height: '4px', background: '#00C4C4', borderRadius: '20px', paddingRight: 66}} />
                </div>

                
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <div style={{width: '209px', color: '#00C4C4', fontSize: '18px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word'}}>{shoe.price}원이 모였어요</div>
    <div style={{display: 'flex', justifyContent: 'flex-end', width:150, color: '#ADB5BD', fontSize: '12px', fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word', marginLeft: 10}}>77% 달성</div>
                </div>
            </div>
        </div>
      </div>
      <div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 10}} /></div>
      <div style={{width: 215, hegiht: 4, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 23, wordWrap: 'break-word'}}><h4 className="pt-5"><b>프로젝트 스토리</b></h4></div>
      <div style={{width: '100%', height: '100%', bottom: 6,paddingLeft: 16, paddingRight: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
    
      <div style={{width: 360, color: '#495057', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 1.5, wordWrap: 'break-word', textAlign:"left"}}>이 프로젝트를 준비하게 된 배경은요,<br/>펀딩금을 모금하는 목적으 수로의 괴사된 다리 절단 수술비<br/>(절단을 막아보려 노력했지만 불가)<br/><br/>장애견이라도 견평생 돌봐줄 위탁비 최대로 모아서 매월 지출(혹여라도 수로를 입양하려는 분이 있을때까지 버틸 자금)<br/><br/>이번에 선보이는 프로젝트는 이런 이야기를 가지고 있습니다.<br/>많은 후원 부탁드립니다.<br/><br/>똘이를 지켜주세요<br/>　</div>
</div>

<div style={{width: '90%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 10, marginLeft:13}} /></div>

      <div style={{width: 100, hegiht: 1, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 10, wordWrap: 'break-word'}}><h4 className="pt-5"><b>새소식</b></h4></div>
      <div style={{width: '100%', height: '100%', padding: 16, background: '#F9FAFB', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', color: '#ADB5BD', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '300', lineHeight: 5, wordWrap: 'break-word'}}>메이커가 새소식을 준비하고 있습니다</div>
    


      <div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 10}} /></div>
      <div style={{width: 100, hegiht: 1, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 10, wordWrap: 'break-word'}}><h4 className="pt-5"><b>응원금</b></h4></div>
      <div style={{width: '100%', height: '100%', padding: 16, background: '#F9FAFB', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', color: '#ADB5BD', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '300', lineHeight: 5, wordWrap: 'break-word'}}>응원금이 없습니다.</div>
    



    <div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 10}} /></div>

<div style={{width: 100, hegiht: 4, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 10, wordWrap: 'break-word'}}><h4 className="pt-5"><b>응원글</b></h4></div>
<div style={{width: '100%', height: '100%', padding: 16, background: '#F9FAFB', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
<div style={{alignSelf: 'stretch', color: '#ADB5BD', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '300', lineHeight: 5, wordWrap: 'break-word'}}>등록된 응원글이 없습니다</div>



<div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 10}} /></div>


<div style={{width: 109, hegiht: 4, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 10, wordWrap: 'break-word'}}><h4 className="pt-5"></h4></div>
<div style={{width: '100%', height: 50, padding: 16, background: '#F9FAFB', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'inline-flex'}}>
<div style={{width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#F9FAFB', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div style={{width: 13.80, height: 15.54, position: 'relative'}}>
            <div style={{width: 13.80, height: 15.54, left: 0, top: -7, position: 'absolute'}}>
            <img src={safeIcon} alt="홈 아이콘" width="18" height="18" />
            </div>
        </div>
        <div style={{textAlign: 'center', color: '#495057', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>프로젝트에 문제가 있나요?</div>
    </div>
    <div style={{borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>
    
        <div style={{textAlign: 'center', color: '#495057', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word'}}>신고하기</div>
        <img src={rightIcon} alt="홈 아이콘" width="18" height="18" />
        
            <div style={{width: 6.85, height: 12.57, left: 11.57, top: 1.72, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#495057'}}></div>
    </div>
    
</div>
<div style={{width: '100%', height: 1, position: 'relative', background: '#F2F4F6', lineHeight: 5}} /></div>

<div style={{width: 109, hegiht: 2, color: 'black', fontSize: 24, fontFamily: 'Pretendard', textAlign:"center", lineHeight: 5, wordWrap: 'break-word'}}><h4 className="pt-5"></h4></div>
<div style={{width: '100%', height: 30, padding: 16, background: '#F9FAFB', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'inline-flex'}}>



      </div>      
    </div>  
  )
};
  
export default Detail;
