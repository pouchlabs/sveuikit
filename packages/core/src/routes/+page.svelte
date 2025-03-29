<script>
import {ThemeSelect,Loader,Button,Card,V1Layout} from "$lib"
	import Dropdown from "$lib/components/dropdown/dropdown.svelte";
  import Toggle from "$lib/components/toggles/toggle.svelte";
  import Checkbox from "$lib/components/checkboxes/checkbox.svelte";
  import {Noty,Notification,Nottify} from "$lib/components/notifications";
let themes=["light","dark","brand","cupcake","synthwave","business","dracula","acid","silk","retro","nord","bumblebee","emerald","valentine","cyberpank",
    "garden","forest","acqua","halloween","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cymk","silk","abyss","dim","night","winter"
]
function onThe(the){
 console.log(the)
}
function start(){
  // https://dummyjson.com/icon/HASH/SIZE/?type=png (or svg)
fetch('https://dummyjson.com/icon/abc123/150') // png is default
.then(response => response.blob()) // Convert response to blob
.then( async blob => {
  let i = document.createElement("img")
 
  const reader = new FileReader()
// 2. Add a handler for the 'onload' event
reader.onload = (e) => {
    // 5. Get the result when the 'onload' event is triggered.
    const base64data = reader.result  
    i.setAttribute("src",base64data);             
   document.body.appendChild(i)
}
// 3. Add a handler for the 'onerror' event
reader.onerror = () => {                
    console.log('error')
}
// 4. Call 'readAsDataURL' method
reader.readAsDataURL(blob)
})
// Blob {size: SIZE, type: 'image/png'}

}
function end(){
console.log("close")
}
</script>
<div class="navbar w-full  ">
  <div class="navbar-start">
    <a href="/" class="btn btn-circle btn-ghost">
      <div class="avatar">
        <div class="w-8 rounded">
  
          <img
            src="/logo.svg"
            alt="sveuikit logo" />
        </div>
      </div>
    </a>
   
<span class="text-3xl m-2">SveuiKit</span>
<div class="dropdown dropdown-bottom m-2 dropdown-hover">
  <div tabindex="0" role="button" class="btn btn-circle btn-sm btn-ghost">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>

  </div>
  <ul tabindex="0" class="dropdown-content menu mt-1 w-80 bg-base-200 min-w-20 flex flex-col align-middle  min-h-20 text-base-content rounded-box top-px   max-h-[calc(100vh-8.6rem)] overflow-auto  border-white/5  outline-black/5 shadow-2xl">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li class="lg:hidden">
      <a href="/docs" class="">docs</a>
    </li>
    <li class="lg:hidden">
      <a href="/components" class="">components</a>
    </li>
    
  </ul>
</div>
   
  </div>
  <div class="navbar-center">
    <a href="/docs" class="btn hidden lg:block btn-ghost btn-soft m-2 text-xl">docs</a>
    <a href="/docs" class="btn hidden lg:block btn-ghost btn-soft m-2 text-xl">components</a>
  </div>
  <div class="navbar-end">
    <a href="https://github.com/pouchlabs/sveuikit" class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
    </a>
    <a href="https://x.com/pouchlab" class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
    </a>
    <ThemeSelect onSelectedTheme={onThe} themes={themes}></ThemeSelect>
  </div>
</div>
<Notification id="home-noty"></Notification>
<section class="flex items-center px-15 justify-center flex-wrap gap-2  my-2">
  <div class="flex flex-col prose  lg:mx-auto">
    <h1 class="text-3xl animate-jump-in animate-delay-300 animate-once font-bold text-primary">
      Functional Svelte5 Ui Kit
    </h1>
      <p class="text-xl">
        A simple,lightweight and functional svelte5 ui kit.
      </p>
      <div class="flex flex-wrap gap-2">
         <Button href="/docs">
             Get Started
         </Button>
      </div>

    </div>
<div class="mx-auto flex flex-wrap gap-2">
  <Button onStart={start} text=""   onFinish={end}>start & end</Button>
  <Button text="creating.." >create</Button>
  <Button text=""  classes="btn-circle btn-md btn-ghost font-bold text-md" >+</Button>
  <button class="btn">Daisy btn</button>
<Card bordered shadow="2xl" classes="relative " >
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</Card>
<Card>
  <Toggle variant="checkbox-primary" size="toggle-md" onUnchecked={()=>console.log("unchecked")} rtl checked onChecked={()=>console.log("checked")}>
    view console
  </Toggle>
<Checkbox variant="checkbox-primary"  onUnchecked={()=>console.log("unchecked")} rtl checked onChecked={()=>console.log("checked")} >
 
</Checkbox>
<Button  onStart={()=>new Nottify("home-noty").show({message:"hi",delay:2000,classes:"bg-success animate-jump-in"})}>
  show notifications
</Button>
</Card> 

<Dropdown  bordered hover onClose={end} onOpen={()=>{console.log("load")}}  classes="mt-1"  shadow="2xl">
  {#snippet toggle()} 
    <button class="btn">dropdown </button>
  {/snippet}
  <ul tabindex="0" class="">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</Dropdown>
</div>
</section>
