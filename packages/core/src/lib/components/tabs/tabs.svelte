<script>
    let {tabs=[{name:"default",content:"<h1>default content</h1>",checked:false}],bottom=false,type="tabs-border",size="tabs-md",classes="",onTabOpened=()=>{},onTabClosed=()=>{},onActiveTab=()=>{}}=$props();
    let activetab = $state("default");
   function toggleTab(e){
    document.querySelectorAll(".tab").forEach(btn=>{
        if(btn.classList.contains("tab-active"))
        btn.classList.remove("tab-active");  
        if(typeof onTabClosed === "function"){
          onTabClosed()
       }
     })
    activetab = e;
    if(typeof onActiveTab === "function"){
      onActiveTab(activetab.slice(0,-1))
    }
    if(typeof onTabOpened === "function"){
      onTabOpened()
    }
   }
   $effect(()=>{
      tabs.forEach((tab,i)=>{
        if(tab.checked){
          document.getElementById(tab.name+i)?.classList.add("tab-active")
             if(typeof onActiveTab === "function"){
            onActiveTab(tab.name)
          }
          if(typeof onTabOpened === "function"){
             return onTabOpened()
           }
        }
      })
   })

 
</script>
   <div class:tabs-bottom={bottom === true} class="tabs {type} {size}">
    {#if tabs && tabs.length >0}
    {#each tabs as tab,i (tab.name)}
         {#if tab && tab.name && tab.content}
               {#if tab.name.length > 0 }
               <label id={tab.name+i} onclick={(e)=>{toggleTab(tab.name+i)}} class:tab-active={activetab === tab.name+i} class="tab">
                
               {@html tab?.icon}
                {tab.name+i}
              </label>
             
               {/if}
               {#if tab.content}
               <div  class="tab-content  bg-base-100  p-6 {classes}">{@html tab?.content}</div>
  
              {/if}

         {/if}
    {/each}
    {/if}
  </div>