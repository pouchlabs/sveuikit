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
    onModalClose=()=>{}
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
<dialog id="{id}" class:modal-open={isOpen} class="modal">
  
  <div class="modal-box border outline-1 bg-base-200  border-white/5   outline-black/5 alert-vertical sm:alert-horizontal  {classes}">
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