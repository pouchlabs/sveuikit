<script>
import Button from "../button/button.svelte";
  let {
    id,
    backdrop = false,
    classes = "",
    full = false,
    children,
    content,
    action,
    open=false,
    delay=3000,
    onModalOpen=()=>{},
    onModalClose=()=>{},
    rtl=false,
  } = $props();
  let auto = $state(false)
  let isOpen = $derived(auto); 
  
    export function toggleModal(){
       auto=!auto
       if(auto){
        onModalOpen.apply(arguments)
        return
       }
       onModalClose.apply(arguments)
    }
    function keyPress (e) {
    if(e.key === "Escape") {
      auto=!auto
       if(auto){
        onModalOpen.apply(arguments)
        return
       }
       onModalClose.apply(arguments)
    }
}
 $effect.pre(()=>{
  if(open){
    setTimeout(()=>{ 
     auto=true
     return onModalOpen()
  },delay)
  return
  }

 })

</script>

<div   class="p-2">
  
  <Button text="" delay={delay} onFinish={()=>{toggleModal()}}>open modal</Button>
  
</div>
<dialog onkeydown={(e)=>{keyPress(e)}} id="{id}" class:modal-open={isOpen}  class="modal m-0 p-0 top-0 right-0 max-w-[100vw]   ">
  
  <div class:pl-5={!rtl && full === true } class:modal-full={full === true} class="border w-auto modal-box min-w-[200px] min-h-[200px] max-w-[100vw] max-h-[100vh] shadow-2xl flex flex-col  right-0 sm:no-scrollbar rounded-box z-[90000]    outline-1 bg-base-200  border-white/5   outline-black/5 {classes}">
    {#if full === true}
    <button class:right-4={rtl === true} onclick={()=>auto = false} class="btn  btn-xs btn-circle btn-primary fixed top-1  z-50  ">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
     </button>
     {/if}
    {@render content?.()}
    <div class="modal-action">
       {@render action?.()}
      
    </div>
  </div>
  {#if backdrop}
  <button  onclick={()=>{toggleModal()}} class="modal-backdrop cursor-pointer" >

  </button>
  {/if}
</dialog>