<script lang="ts">
let {shadow="sm",classes="",bordered=false,children,hover=false,open=false,toggle,delay=2000,onClose=()=>{},onLoad=()=>{}}=$props();
import { onClickOutside } from "runed";
 
	let container = $state<HTMLElement>()!;
 
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
       
         onLoad()
       
    })
</script>
<div class:dropdown-hover={hover === true} class:dropdown-open={open=== true} class="dropdown">
    <div onclick={()=>{toggleDropDown()}}   class="">
         
             {@render toggle?.()}
    </div>
    <div bind:this={container} tabindex="0" class:border={bordered=== true} class:outline-1={bordered === true} class="dropdown-content menu bg-base-200 rounded-box border-white/5 shadow-{shadow}  outline-black/5 {classes} z-1 p-2">
     {@render children?.()}
    </div>
  </div>