<script>
    let {links=[],footer,logo,id=crypto.randomUUID()}=$props();
    let active = $state("/");
   function LoadLinksOnInit(){
     if(location && location.pathname){
      active=location.pathname
     }
   }

    function toggleActive(e){
      if(location && location.pathname){
         active=location.pathname
      }
    }
    $effect(()=>{
        LoadLinksOnInit()
    })
</script>
<div class="flex flex-col align-middle">
    {@render logo?.()}
</div>
<ul id={id} class="flex flex-col bg-base-100 pb-[125px] pt-5 align-middle ">
    {#each links.filter((item, index) => links.indexOf(item) === index) as link }
         {#if link.url && typeof link.url === "string"}
         <li class="tooltip  mt-2 mb-2" data-tip={link.title || link.url || link || undefined}>
            <a class:active={active && active === link.url} onclick={e=>{toggleActive(e)}} id={link.title || undefined} href={link.url || link}  class="pill-btn   truncateTexts" >
             {@html link.icon || link.title || link.url|| link}
            </a>
      </li>
         {/if}
    {/each}
   
  </ul>
  <div class="flex flex-col w-16 max-w-[60px] max-h[100px] pt-1 bg-base-100 fixed bottom-0 align-middle">
    {@render footer?.()}
  </div>