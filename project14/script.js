let chance = 1;
let Matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let arr = ['', '', '', '', '', '', '', '', ''];
function Display(e, index) {
    if (chance % 2 != 0) {
        e.target.innerHTML = "X";
        arr[index - 1] = e.target.innerHTML;
        
            if(check()){
               document.querySelector("#name").innerHTML=" X ";
               document.querySelector(".box").style.display="block";
               restart();
            }
            else if(checktie()){
                document.querySelector(".box").innerHTML=" No one Wins!!!!";
                document.querySelector(".box").style.display="block";
                restart();
            }

        chance++;
    }
    else {
        e.target.innerHTML = "0";
        arr[index - 1] = e.target.innerHTML;
        if(check()){
            document.querySelector("#name").innerHTML=" 0 ";
            document.querySelector(".box").style.display="block";
            restart();
         }
         else if(checktie()){
            document.querySelector(".box").innerHTML=" No one Wins!!!!";
            document.querySelector(".box").style.display="block";
            restart();
        }
        chance++;
    }
}
function restart(){
    arr = ['', '', '', '', '', '', '', '', ''];
    chance = 1;
    document.querySelectorAll(".btn").forEach((ele)=>{
        ele.innerHTML=" ";
    })
}
function checktie(){
    for(let i in arr)
    {
        if(arr[i]==='')
        {
            return false;
        }
        
    }
    return true;
}
function check() {
    console.log("inside check");
    console.log(arr);
    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[0].length; j++) {
            if ((arr[Matrix[i][j]] === arr[Matrix[i][j + 1]]) && (arr[Matrix[i][j]] === arr[Matrix[i][j + 2]])&& arr[Matrix[i][j]]!='' && arr[Matrix[i][j+1]]!=''&& arr[Matrix[i][j+2]]!='') {
                return true;

            }

        }

    }
    return false;
}