
class AppleWatch{
  setData(d){
    this.date = d.toLocaleTimeString();
    return this.date;
  }

}

function fixHtml(){
  try{
    let p = document.querySelector(".par");
    p.innerHTML = appleWatch.setData(new Date());
  }
  catch(err){
    alert(err.message);
  }
}

let appleWatch = new AppleWatch();
setInterval(fixHtml, 1000)

let a = new Date();
console.log(a.toLocaleTimeString());