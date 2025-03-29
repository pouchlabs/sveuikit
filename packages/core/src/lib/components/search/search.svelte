<script lang="ts">
 import {Modal,toggleModal} from "$lib/components/index.js";
 import FlexSearch from 'flexsearch';
 import Userst from "../userst.svelte";
let {data}=$props();

const usersIndex = new FlexSearch.Index({tokenize:"forward"});
data.allusers.forEach((user, i) => {
		const item = `${user.email} ${user.roles} ${user.isSuper} ${user.isBaned} ${user.name} ${user.created_at}`
		usersIndex.add(i, item)
	})
    let searchedUsers = $state([]);

function search(e){
    let text = e.target.value;
    if(text.length >= 1){
  let found =[]
  usersIndex.search(text,30).forEach((user,i)=>{
       found.push(data.allusers[user])
    })
   return found
  }
  return []
}

</script>
<Modal backdrop id="search_modal" classes="w-full h-full">
    <button onclick={()=> toggleModal("search_modal")}  class="btn btn-primary btn-xs rounded-full m-2">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    {#snippet content()}

    <form class="flex items-center max-w-lg mx-auto">   
        <label for="search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 hidden flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                </svg>
            </div>
            <input autocapitalize="off" autocomplete="off" type="text" id="search" oninput={(e)=>{searchedUsers=search(e)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search users,by name,roles,email..." required />
            <div id="search_results">
                {#if searchedUsers && searchedUsers.length > 0}
                   <Userst users={searchedUsers}>

                   </Userst>
                  
                {/if}
             </div>
        </div>
     
    </form>
    
    {/snippet}
 
  
</Modal>
<select class="select select-primary w-full max-w-xs">
    <option disabled selected>all users</option>
    <option>admins</option>
    <option>today</option>
    <option>this week</option>
    <option>this month</option>
  </select>
  
