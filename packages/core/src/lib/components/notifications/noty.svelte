<script lang="ts">

import {
	scale,
} from 'svelte/transition';
let {message,id="",variant="",shadow="2xl",delay=0,isSnack=false} = $props();
$effect(()=>{
 if(delay > 0){
  setTimeout(()=>{
    document.getElementById(id)?.classList.add("animate-jump-out")
    setTimeout(()=>{
      document.getElementById(id)?.remove()
    },200)
      
     },delay)
 }

})


</script>

 
    <div id={id}   role="alert"   class="alert animate-jump-in {variant}   trancateTexts mx-auto    border outline-1 z-[10000000]   rounded-box m-2 border-white/5   outline-black/5 alert-vertical sm:alert-horizontal shadow-{shadow} ">
      {#if isSnack === false}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg> 
     {/if}
      <span>{@html message}</span>
      {#if delay === 0}
           <button onclick={()=>{
             document.getElementById(id)?.classList.add("animate-jump-out")
               setTimeout(()=>{
                   document.getElementById(id)?.remove()
               },200)
           }} class="btn btn-ghost btn-sm btn-circle btn-variant ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
           </button>
      {/if}
    </div>
  
  


