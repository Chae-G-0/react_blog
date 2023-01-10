import { useState } from "react";
import "./App.css";

function App() {
  const [skill, setSkill] = useState(["서울", "부산", "대구"]);
  const [good, setGood] = useState(0);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button
        onClick={() => {
          const arr = [...skill].sort();
          setSkill(arr);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          const copy = [...skill];
          copy[0] = "react project";
          setSkill(copy);
        }}
      >
        제목 수정
      </button>
      {skill.map((it, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(idx);
              }}
            >
              {it}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setGood(good + 1);
                }}
              >
                👍
              </span>
              {good + 1}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let del = [...skill];
                del.splice(idx, 1);
                setSkill(del);
              }}
            >
              삭제하기
            </button>
          </div>
        );
      })}
      {modal === true ? <Modal title={title} skill={skill} /> : false}
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let plus = [...skill];
          plus.unshift(value);
          setSkill(plus);
        }}
      >
        작성
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.skill[props.title]}</h4>
      <p>닐짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
