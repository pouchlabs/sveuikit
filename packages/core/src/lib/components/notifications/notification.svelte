<script lang="ts">
import Noty from "./noty.svelte";

let {id="",rtl=false,bottom=false}=$props();



</script>
<div  class:bottom-1={bottom === true} class:right-1={rtl === true }  class="fixed carousel top-0 z-[1] bg-base-10 carousel-vertical  min-h-[2px] no-scrollbar  max-h-[100vh]  max-w-[80vw] rounded-box p-1  " >
  <div id={id}  class= " min-w-[200px]  py-9 my-2 relative  flex flex-col    gap-2 " >

  </div>


</div>