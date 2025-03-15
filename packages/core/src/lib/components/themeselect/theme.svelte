<script>
let {themes=["default","retro","cyberpunk","retro","valentine","aqua"]}=$props();
let current = $state("light");

function changeTheme(e){
let theme = e.target.getAttribute("data-set-theme")
  document.querySelector("html")?.setAttribute("data-theme",theme)
  localStorage.setItem("theme",e.target.value)
  current = localStorage.getItem("theme")
console.log(theme)

}
</script>
<div title="change theme" class="dropdown dropdown-end block">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      <svg
        width="12px"
        height="12px"
        class="inline-block h-2 w-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    
    <div class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5 mt-16" >
       <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
       <ul tabindex="0" class="menu w-52">
        {#each [...new Set(themes)] as theme}
        {#if typeof theme === "string"}
        <li><button onclick={(e)=>changeTheme(e)} class="gap-3 px-2 menu-activ" data-set-theme="{theme}" data-act-class="">
            <div data-theme="{theme}" class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"><div class="bg-base-content size-1 rounded-full"></div> <div class="bg-primary size-1 rounded-full"></div> <div class="bg-secondary size-1 rounded-full"></div> <div class="bg-accent size-1 rounded-full"></div></div> <div class="w-32 truncate">{theme}</div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="invisible h-3 w-3 shrink-0"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg></button></li>
        {/if}
        {/each} 
    </ul>
    </div>
 
  </div>
