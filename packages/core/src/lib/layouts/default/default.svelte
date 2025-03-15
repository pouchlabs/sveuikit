<script>
let {rtl=false,onDrawerOpen=()=>{},onDrawerClose=()=>{},delay=3000,children,sidebar}=$props();
let open = $state(false);
function toggleDrawer(toggle=true){
open = !open
if(!toggle){
    setTimeout(onDrawerClose.call(arguments),delay)
  return
}
if(!open){
    setTimeout(onDrawerClose.call(arguments),delay)
}else{
    setTimeout(onDrawerOpen.call(arguments),delay)
}
}

</script>
<div class:drawer-end={rtl === true} class="drawer lg:drawer-open">
    <input id="default-layout" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
      <!-- Page content here -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <label for="default-layout" onclick={()=>toggleDrawer()}  class="btn btn-ghost btn-circle lg:hidden fixed z-50 top-0 mt-1 mr-1 mb-1 ml-1 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
           
      </label>
      {@render children?.()}
  
    </div>
    <div class="drawer-side">
      <label for="default-layout" onclick={()=>toggleDrawer(false)}  aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class:l-default-no-rtl-aside={open} class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        {@render sidebar?.()}
      </aside>
    </div>
  </div>