// let count = 0;
// let counter = function(){
//     count++;
//     document.querySelector("div").innerHTML=count;
//     count++;

// }
// setInterval( counter ,1000 )
function initial() {
  let circleContainer = document.querySelector(".circle-container");
  for (let i = 0; i < 19; i++) {
    circleContainer.innerHTML += `<div id="div-${i}" class="circle"></div>`;

    change(i);
    setInterval(function() {
      change(i);
    }, 1000);
  }
}

function change(index) {
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  const height = Math.random() * 100;
  const divX = document.querySelector(`#div-${index}`);
  divX.style.top = `${top}%`;
  divX.style.left = `${left}%`;
  divX.style.height = `${height}px`;
  divX.style.width = `${height}px`;

  divX.innerHTML = Math.floor(height);
  divX.style["font-size"] = `${height / 3}px`;
  divX.style["border-width"] = `${height / 50}px`;
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);
  divX.style["border-color"] = `rgb(${red}, ${green}, ${blue})`;
  divX.style["div"] = `rgb(${red}, ${green}, ${blue})`;
  
}
