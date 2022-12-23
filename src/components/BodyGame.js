import React from 'react'
import step from '../audio/stepaudio.wav'
import gamewin from '../audio/winaudio.wav'
export default function BodyGame() {
//turn assign
let turn='X';
let gameover=false;
const changeTurn=()=>{
  if(turn==='X'){
    turn='O';
  }
  else{
    turn='X';
  }
}
//gamewin logic

const gameWin=()=>{
  let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let boxText=document.querySelectorAll('.box');
  for(let e of wins){
      if(boxText[e[0]].innerText===boxText[e[1]].innerText && boxText[e[2]].innerText===boxText[e[1]].innerText && boxText[e[0]].innerText!==''){
        let TextInfo=document.querySelector('.infoText');
        TextInfo.innerText=`'${boxText[e[0]].innerText}' Won !!`
        let gif=document.getElementById('snoop');
        gif.style.height='300px'
        turn='';
        let winaudio=document.getElementById('winning')
        winaudio.play();
        gameover=true;
      }
  }
}


//selection
const change=(event)=>{
  let boxInfo=event.target;
  if(boxInfo.innerText===''){
    boxInfo.innerText=turn;
    changeTurn();
    gameWin();
    if(!gameover){
    let TextInfo=document.querySelector('.infoText');
    TextInfo.innerText=`Turn for '${turn}'`
    let step=document.getElementById('step');
    step.play();
  }
}
}
// reset changes
const resetChanges=()=>{
  let boxes=document.querySelectorAll('.box');
  for(let box of boxes){
    box.innerText='';
  }
  turn='X';
  let TextInfo=document.querySelector('.infoText');
  TextInfo.innerText=`Turn for '${turn}'`
  let gif=document.getElementById('snoop');
  gif.style.height='0px'
  gameover=false;
}
  return (
    <div>
      <div className="gamecontainer">
        <div className="gamebox">
            <div className="box l0 t0" onClick={change}></div>
            <div className="box t0"  onClick={change}></div>
            <div className="box t0 r0" onClick={change}></div>
            <div className="box l0" onClick={change}></div>
            <div className="box" onClick={change}></div>
            <div className="box r0" onClick={change}></div>
            <div className="box l0 b0" onClick={change}></div>
            <div className="box b0" onClick={change}></div>
            <div className="box b0 r0" onClick={change}></div>
        </div>
        <div className="gameinfo">
          <div className="text">The Tic Tac Toe Game</div>
          <div className="info"><p className='infoText'>Turn for 'X'</p>
          <button id='reset' onClick={resetChanges}>Reset</button>
          </div>
          <p ><img src="https://i.gifer.com/6os.gif"id='snoop' alt="snoop dog" /></p>
        </div>
      </div>
      <audio src={step} id='step'></audio>
      <audio src={gamewin} id='winning'></audio>
    </div>
  )
}
