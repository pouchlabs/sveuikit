import Notification from "./notification.svelte";
import Noty from "./noty.svelte";
import { mount } from "svelte";
export class Nottify{
  constructor(id=`${crypto.randomUUID()}`){
    this.container=document.getElementById(id);
    this.id = id;
  }
  show(opts={message:"new noty",delay:3000,classes:"alert-primary"}){
     let id = this.id+crypto.randomUUID();
   // @ts-ignore
   mount(Noty, {target: this.container,props:{
    message:opts.message,
    id
   }});
 
     setTimeout(()=>{
      document.getElementById(id)?.remove()
     },opts.delay)
  }
}

export {Notification,Noty}