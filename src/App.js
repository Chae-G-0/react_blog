import { useState } from 'react';
import './App.css';

function App(){
 
  const [skill, setSkill] = useState(['서울', '부산', '대구']);
  const [good, setGood] = useState(0);
  const [modal, setModal] = useState(false)


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={() => {
        const arr = [...skill].sort()
        setSkill(arr);
      }}>가나다순 정렬</button>

      <button onClick={() => {
        const copy = [...skill]
        copy[0] = 'react project'
        setSkill(copy)
      }}>제목 수정</button>

      {/* <div className="list">
        <h4>
          {skill[0]} <span onClick={()=>{setGood(good+1)}}>👍</span> {good}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{skill[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal);}}>{skill[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        skill.map((it, idx) => {
          return (
            <div className="list" key={idx}>
              <h4
                onClick={() => {
                  setModal(!modal);
                }}
              >
                {it}
                <span
                  onClick={() => {
                    setGood(good + 1);
                  }}
                >
                  👍
                </span>{good+1}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }
      {
        modal === true ? <Modal/> : false
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>닐짜</p>
      <p>상세 내용</p>
    </div>
  );
} 

export default App;
