<script>
import {nanoid} from "nanoid";
    let {id=crypto.randomUUID() || nanoid(16),indexed=true,data=[{name:`  <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>`,job:"developer",company:"pouchlabs"},{name:`  <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>`,job:"ceo",company:"pouchlab"}],header,footer,checkbox=false,onSelected=()=>{}}=$props()

let heads = [];
let isselection = $state(false);
$effect.pre(()=>{
data.forEach((item, idx) => {
   Object.entries(item).forEach(([key, value]) => {
      heads.push(key)
       heads = [...new Set(heads)]
   });
});
})
function toggleAll(e){
let selected=[]

 document.querySelectorAll(`.table-checkbox${id}`).forEach(btn=>{
    if(!btn.checked){
        btn.checked=true
        isselection=true
       
        //after toggle prehook
        if(typeof onSelected === "function"){
            
            selected.push(btn.id)
            onSelected([... new Set(selected)])
            
        }
    
    }else{
        //posthook
        btn.checked=false
        isselection = false
    }
    
 });

}
function onChecked(e){
    let selected=[]
    let currentbtn= e.target || e.srcElement;
    if(currentbtn.checked === true) {
        document.querySelectorAll(`.table-checkbox${id}`).forEach(btn=>{
            if(btn.checked === true){
                
                selected.push(btn.id)
            onSelected([... new Set(selected)])
        
             
            }
        })
   

    }else{
        document.querySelectorAll(`.table-checkbox${id}`).forEach(btn=>{
            if(btn.checked === true){
            isselection= true
                selected.push(btn.id)
                onSelected(selected)
               
                
            }else{
               isselection =false
            }
        })
   
    }
  
  
 
}
</script>
<div class="overflow-x-auto  w-full">
    <table id="{id}" class="table table-xs table-pin-rows table-pin-cols">
      <thead class="shadow-2xl">
        <tr>
            <th></th>
            
                {#if  checkbox === true}
                <th class="z-2 w-8 shadow-2xl">
                    <label   onchange={(e)=>{toggleAll(e)}}>
                      <input checked={isselection === true} id="all{id}-btn"  type="checkbox" class="checkbox " />
                    </label>
                  </th>
                {/if}
            
           <th>
              {@render header?.() }
           </th>
           <th></th>
        </tr>
        <tr>
            <th></th>
             {#each heads as header,i }
                  <th>
                    {@html header}
                  </th>
             {/each}
             <th></th>
        </tr>
      </thead>
      <tbody >
        {#if data && data.length >0}
           {#each data as item,i }
              <tr>
                {#if checkbox === true}
                <th class="z-2 w-8 shadow-2xl">
                    <label  id="{item.id || item._id || item.email || i}" onchange={(e)=>{onChecked(e)}}>
                      <input  id="{item.id || item._id || item.email || i}" type="checkbox"  class="table-checkbox{id} checkbox " />
                    </label>
                  </th>
                  {/if}
                  {#each Object.values(item) as da }
                  <td>{@html da}</td>
                  {/each}
                
                {#if indexed === true}
                  
                 <th class="z-2 w-8 shadow-2xl">
                
<div class="dropdown dropdown-end">
  <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
    <svg
      tabindex="0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-4 w-4 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class="card card-sm dropdown-content bg-base-200 rounded-box z-4 w-64 shadow-xl">
    <div tabindex="0" class="card-body">
      j
    </div>
  </div>
</div>
                 </th>
                {/if}

              </tr>
           {/each}
        {/if}
       
      </tbody>
      <tfoot class="shadow-2xl">
       
         <tr>
          <th></th>
              {#each heads as header,i }
                   <th>
                     {@html header}
                   </th>
              {/each}
           
           <th></th>
         </tr>
         <tr>
            <th></th>
            <th>
                {@render footer?.() }
             </th>
             <th></th>
         </tr>
      </tfoot>
    </table>
  </div>