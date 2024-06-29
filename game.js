let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let msgcont = document.querySelector(".msg-container");

let turnx = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

const resetgame = () =>{
    for(let box of boxes){
        turnx = true;
        enablebox();
        msgcont.classList.add("hide");
    }
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);

const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        
    }
}

boxes.forEach((box) => {
 box.addEventListener("click", () =>{
    if (turnx){
        box.innerText = "X";
        box.style.color = "#6F1D1B" ;
        turnx = false; 
      } else{
        box.innerText = "O";
        box.style.color = "#432818" ;
        turnx =true;
      }
      box.disabled = true;
      count++;
      checkwinner();

      let isWin = checkwinner();
      if(count === 9 && !isWin){
        draw();
      }
 })
})

const draw = ()=>{
    msg.innerText = 'game was a draw';
    msgcont.classList.remove("hide");
    disablebox();
}

const showWin = (win) => {
    msg.innerText = `Congratulations🥳🎉, winner is ${win} `;
    msgcont.classList.remove("hide");
    disablebox();
}

const checkwinner = () => {
    for(let arr of winPattern){
        let posval1 = boxes[arr[0]].innerText;
        let posval2 = boxes[arr[1]].innerText;
        let posval3 = boxes[arr[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2===posval3){
                showWin(posval1);
                return true;
            }
        }
    }
}

     
