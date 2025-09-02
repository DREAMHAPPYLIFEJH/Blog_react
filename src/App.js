/* eslint-disable */

import React, { use, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['갤럭시 폴드 7 가격 비교, 자급제로 살까 통신사로 살까', '아이폰 17 출시일, 디자인, 그리고 예상 가격 정리', '카톡 입력중 끄기 설정, 카카오톡 입력중 표시 없애는 법']); 
  let [따봉, 따봉변경] = useState(0);

  let style_post = { color:'blue', fontSize:'30px'};
  let posts2 = '강남 고기 맛집'

    // function 제목바꾸기() {
    //   var newArray = [...글제목]; 
    //   newArray[0] = '여자 코트 추천';
    //   글제목변경(newArray)
    // }

  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog </div>
      </div>
      {/* <button onClick={() => { 제목바꾸기() }}> 버튼 </button> */}
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1)} }>👍</span> { 따봉 } </h3>
        <p> 2월 17일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> 2월 18일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2 ] } </h3>
        <p> 2월 19일 발행 </p>
        <hr/>
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
