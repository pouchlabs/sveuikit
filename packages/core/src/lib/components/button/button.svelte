<script>
    import {Loader} from "../loader/index.js";
    let {href="",onStart=function(){},onFinish=function(){},children,delay=3000,target="self",soft=false,size="sm",variant="primary",classes="",text="loading..",shape="square"}=$props();
    let loading = $state(false);
    function handleAsync(e){
      let btn = e.target || e.srcElement;
      btn.setAttribute("disabled",true);
      loading=true;
      onStart.call(arguments)
      setTimeout(()=>{
           loading=false;
           btn.removeAttribute("disabled","")
           onFinish.call(arguments)
      },delay)
    }

</script>
{#if href && typeof href === "string" && href.length > 0}
<a onclick={(e)=>handleAsync(e)} href="{href}" {target} class:btn-soft={soft===true} class="btn btn-{shape} btn-{variant} btn-{size} {classes}"> 
    {#if loading}
    <Loader show size="md" classes>
       {text}
    </Loader>
 {:else}
   {@render children?.()}
 {/if}

</a>
{:else}
   
<button onclick={(e)=>handleAsync(e)} class:btn-soft={soft===true} class="btn active btn-{shape} btn-{variant} btn-{size} {classes}">
    {#if loading}
       <Loader show size="md" classes>
          {text}
       </Loader>
    {:else}
      {@render children?.()}
    {/if}
  
  </button>
{/if}