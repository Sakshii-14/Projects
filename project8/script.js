let exp = "";
function Calculate(e) {
  let a = e.target.innerText;
  exp += a;
  document.querySelector("#content").innerHTML = exp;
  let result = 0.0;
  if (a === "=") {
    const split = exp.match(/(\d+|[/*+-])/g);
    for (let i = 0; i < split.length; i++) {
      if (split[i] === "/") {
          let a=parseFloat(split[i-1]);
          let b=parseFloat(split[i+1]);
          result=result+(split[i-1]/split[i+1]);
      }
    }
    for (let i = 0; i < split.length; i++) {
      if (split[i] === "*") {
          let a=parseFloat(split[i-1]);
          let b=parseFloat(split[i+1]);
          result=result+(split[i-1]*split[i+1]);
      }
    }
    if (split[1] == "+") {
      let newarray = split.filter(elem => elem.match(/(\d+)/g))
      let arr = [];
      for (let i = 0; i < newarray.length; i++) {
        arr.push(parseInt(newarray[i]))
      }
      let value = arr.reduce((sum, cvalue) => sum + cvalue, 0);
      document.querySelector("#content").innerHTML = value;
    }

  }
  if (a === "C") {
    exp = " ";
    document.querySelector("#content").innerHTML = exp;
  }


}
