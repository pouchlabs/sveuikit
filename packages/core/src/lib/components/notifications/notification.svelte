<script lang="ts">
import Noty from "./noty.svelte";

let {id="",rtl=false,bottom=false}=$props();



</script>
<div  class:bottom-1={bottom === true} class:right-1={rtl === true } id={id} class="stack bg-base-100 stack-to max-w-[80vw] rounded-box p-1  z-1 bottom-0 max-h[85vh] mb-5 fixed  flex flex-col overflow-hidden  no-scrollbar gap-2  ">
  
</div>