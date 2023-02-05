function getData() {
  let data = new Date();
  /* let time = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`; */
  let t = data.toLocaleTimeString();
  return t;
}


function showTime() {
  let p = document.querySelector(".par");
  p.innerHTML = getData();
}



setInterval(showTime, 1000)


