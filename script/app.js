
class AppleWatch{
  setData(d){
    this.date = d.toLocaleTimeString();
    return this.date;
  }

}

function fixHtml(){
  let p = document.querySelector(".par");
  p.innerHTML = appleWatch.setData(new Date());
}

let appleWatch = new AppleWatch();
setInterval(fixHtml, 1000)