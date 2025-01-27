
// yeha sare pages ko access kiya ja rha hai

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


//track karna ha phele ki phele kisne click kiya hai 


let turnO = true;    //player 1 ne enter kiya hai 

//yeh sare possible pattern ha win karne ke liye tho yeha hum usko array mai dal diye hai if you need you can make here string 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];



const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

// ismai hum print karwane ka kaam kar rha hai jaha X or O print karwana hai wha click karna hoga

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){                          //agar player  1 ki turn hai tho wo dalega X fir uske baad playyer 2 ki bari ayegi 
            box.innerText = "O";
            turnO = false;
        } else{                             // player 2 ki turn pr O print karwenge            
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


// ismai hum ek funtion bana rhe hai ismai agar ek person jeet gaya tho uske aage game continue nhi hoga

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () =>{                                         
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



// we are creating a winner text jsimai hum agar jeet jate hai tho wo show karga congratuition your are the winner 

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();                                                          // or yeha wo funtion call ho rha hai jisko humne disable karne ke liye banaya tha pg 42 pe hai 
}



// yeha check ho rha hai ki koi matrix match ho rha hai ki nhi winner ke liye 

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
 

        //ismai check kar hra hai ki teeno value same hogi tho winner ka messagea show karge 

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);