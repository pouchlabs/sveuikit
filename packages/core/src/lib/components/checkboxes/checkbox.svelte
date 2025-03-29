<script lang="ts">
    let {rtl=false,id=crypto.randomUUID(),checked=false,variant="checkbox-primary",size="checkbox-sm",children,disabled=false,classes="",onChecked=()=>{},onUnchecked=()=>{}}=$props();
   let ischecked = $derived(checked);
   $effect(()=>{
      if(ischecked){
       return onChecked()
      }
       return onUnchecked()
   
   })
   
   </script>
   <div class="flex flex-wrap gap-2 p-1">
       {#if !rtl}
   
       <input id onclick={()=>checked=!checked} type="checkbox" disabled={disabled} checked={checked} class="checkbox {variant} {size} {classes} " />
       
       {@render children?.()}
       {:else}
       {@render children?.()}
       <input id onclick={()=>checked=!checked} type="checkbox" disabled={disabled} checked={checked} class="checkbox  {variant} {size} {classes} " />
       
       {/if}
   </div>