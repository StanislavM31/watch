/* class AppleWatch{
  constructor(){
    setTimeout(this.fixHtml, 1000);
  }

  setData(){
    let a = new Date();
    return a.toLocaleTimeString();
  }

  fixHtml(){
    let pTag = document.querySelector('.par');
    pTag.innerHTML = this.setData();
  }
} */
class AppleWatch{
  constructor(){
    setTimeout(this.fixHtml, 1000);
  }

  setData(){
    let a = new Date();
    return a.toLocaleTimeString();
  }

  fixHtml(){
    let pTag = document.querySelector('.par');
    pTag.innerHTML = apple.setData();
  }
}
let apple = new AppleWatch();
