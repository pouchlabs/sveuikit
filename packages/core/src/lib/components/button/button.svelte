<script>
    import {Loader} from "../loader/index.js";
    let {href="",onStart=function(){},onFinish=function(){},children,delay=3000,target="self",soft=false,size="btn-sm",classes="",text="loading..",shape="btn-squire"}=$props();
    let loading = $state(false);
    function handleAsync(e){
      let btn = e.target || e.srcElement;
      btn.setAttribute("disabled",true);
      loading=true;
      if( typeof onStart === "function")onStart.call(arguments);
      setTimeout(()=>{
           loading=false;
           btn.removeAttribute("disabled","")
           if( typeof onFinish === "function")onFinish.call(arguments);
      },delay)
    }

</script>
{#if href && typeof href === "string" && href.length > 0}
<a onclick={(e)=>handleAsync(e)} href="{href}" {target} class:btn-soft={soft===true} class="btn btn-primary  {classes}"> 
    {#if loading}
    <Loader show size="md" classes>
       {text}
    </Loader>
 {:else}
   {@render children?.()}
 {/if}

</a>
{:else}
   
<button onclick={(e)=>handleAsync(e)} class:btn-soft={soft===true} class="btn btn-primary  {shape}  {size} {classes}">
    {#if loading}
       <Loader show size="md" classes>
          {text}
       </Loader>
    {:else}
      {@render children?.()}
    {/if}
  
  </button>
{/if}