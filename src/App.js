import { useState } from 'react';
import './App.css';

function App(){
 
  const [skill, setSkill] = useState(['JavaScript', 'React', 'MongoDB']);
  const [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
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
        <h4>{skill[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
