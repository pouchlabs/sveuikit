 // @ts-ignore
import Notification from "./notification.svelte";
import Noty from "./noty.svelte";
import { mount } from "svelte";
export class Nottify{
  constructor(id=`${crypto.randomUUID()}`){
    this.container= document.getElementById(id);
    this.id = id;
    this.notifications = [];
  }
  show(opts={message:"new noty",id:"",delay:0,variant:"primary",shadow:"2xl"}){
    let id = opts.id || this.id+crypto.randomUUID();
    let delay = opts.delay || 0;
    let message = opts.message || "new Noty";
    let variant = opts.variant || "primary";
    let shadow = opts.shadow || "2xl";
   mount(Noty, {target: this.container,props:{
   message,
   id,
   delay,
   shadow,
   variant
   }});
 this.notifications.push({id,delay,message}) 
  }
  closeAll(){
    this.container?.childNodes.forEach((child)=>{
      let to_remove = document.getElementById(child.id);
      if(to_remove){
        to_remove.classList.add("animate-jump-out")
        setTimeout(()=>{
           to_remove.remove()
        },200)
      }
      
    })
    this.notifications=[]
  }
  remove(id=""){
   if(id){
    document.getElementById(id)?.remove()
    this.notifications=this.notifications.filter(noti=> noti.id !== id);
   }
  }
}

export {Notification,Noty}