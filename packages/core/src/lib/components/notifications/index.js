import Notification from "./notification.svelte";
import Noty from "./noty.svelte";

export class Nottify{
  constructor(id=`${crypto.randomUUID()}`){
    this.container=document.getElementById(id);
    this.id = id;
  }
  show(opts={message:"new noty",delay:3000,classes:"alert-primary"}){
     let id = crypto.randomUUID();
     
    let noty = document.createElement("div");
    noty.setAttribute("id",id);
    noty.classList.add(`alert`);
    noty.className=`${opts.classes}`
    //noty.classList.add(`${opts.classes}`);
    let msg = document.createElement("span");
    msg.innerText=`${opts.message}`;
    noty.appendChild(msg);


     //show
     this.container?.append(noty)
     setTimeout(()=>{
      document.getElementById(id)?.remove()
     },opts.delay)
  }
}

export {Notification,Noty}