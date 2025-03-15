<script>
    let {rtl=false,onDrawerOpen=()=>{},onDrawerClose=()=>{},delay=3000,children,sidebar,pill}=$props();
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
 <div  class="pill no-scrollbar overflow-y-auto bg-base-100 fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center  z-[49]  px-1 py-11 lg:py-2 shadow-lg" >
    {@render pill?.()}
   </div>
    <div class:drawer-end={rtl === true} class="drawer ml-16 lg:drawer-open">
        <input id="v1-layout" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center">
          <!-- Page content here -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <label for="v1-layout" onclick={()=>toggleDrawer()}  class="btn btn-ghost btn-circle lg:hidden fixed z-50 top-0 mt-1 mr-2 mb-1 ml-2 left-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </label>
          {@render children?.()}
      
        </div>
        <div class="drawer-side">
          <label for="v1-layout" onclick={()=>toggleDrawer(false)}  aria-label="close sidebar" class="drawer-overlay"></label>
          <aside class:l-default-no-rtl-aside={open} class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            {@render sidebar?.()}
          </aside>
      </div>
  </div>