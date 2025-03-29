<script>
  /** @type {{id: any, backdrop?: boolean, classes?: string, full?: boolean, children?: import('svelte').Snippet, content?: import('svelte').Snippet, action?: import('svelte').Snippet}} */
  let {
    id,
    backdrop = false,
    classes = "",
    full = false,
    children,
    content,
    action
  } = $props();
    function toggleModal(id=""){
      
    let modal = document.getElementById(id);
    if(modal?.classList.contains("modal-open")){
        modal?.classList.remove("modal-open")
    }else{
     modal?.classList.add("modal-open")
    }
 }
</script>

{@render children?.()}
<div id="{id}" class="modal">
  <div class="modal-box {classes}">
     {@render content?.()}
    <div class="modal-action">
       {@render action?.()}
    </div>
  </div>
  {#if backdrop}
  <button  onclick={()=> toggleModal(id)} class="modal-backdrop" >

  </button>
  {/if}
</div>