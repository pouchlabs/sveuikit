<script lang="ts">
let {shadow="sm",classes="",bordered=false,children,hover=false,open=false,toggle,position="",onClose=()=>{},onOpen=()=>{}}=$props();
import { onClickOutside } from "runed";
 
	let container = $state<HTMLElement>()!;
 let isopen = $derived(open)
	onClickOutside(
		() => container,
		() =>{

          if(container.parentElement?.classList.contains("dropdown-open")){
            open=false
          }
      
        }
	);
    function toggleDropDown(){
      if(!open){
            open=true;
      }else{
            open=false
      }
    }
    $effect(()=>{
       if(isopen){
        return onOpen();
       }
       return onClose();    
    })
</script>
<div class:dropdown-hover={hover === true} class:dropdown-open={open=== true} class="dropdown">
    <div onmouseenter={()=>toggleDropDown()} onclick={()=>{toggleDropDown()}}   class="flex flex-wrap gap-1 justify-content-center align-middle items-center ">
         
             {@render toggle?.()}
    </div>
    <div onmouseleave={()=>{if(hover)open=false}} bind:this={container} tabindex="0" class:border={bordered=== true} class:outline-1={bordered === true} class="dropdown-content menu bg-base-200 rounded-box border-white/5 shadow-{shadow}  outline-black/5 {classes} z-1 p-2">
     {@render children?.()}
    </div>
  </div>