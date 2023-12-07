import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Detail_Header from "./Detail_header";

function Detail(props){
  let params = useParams();
  console.log(params);
  let id = parseInt(params['*']);
  let shoe = props.shoes.find(x => x.id === id);

  console.log(id);
  if (!shoe) {
    return <div>해당 신발을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="Detail_Header">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" 
          width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <p>{shoe.comment}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};
  
export default Detail 
