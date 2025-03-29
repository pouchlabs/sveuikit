<script lang="ts">
    let {checked=false,variant="info",size="",disabled=false,children,classes="",min=0,max=100,value=20,onValue=()=>{}}=$props();
    function handleChange(e){
       value=value
        if(onValue){
            if(typeof onValue === "function"){
               return onValue(value)
            }
        }
    }
    const range=`range-${variant}`;
</script>
<input type="range" onchange={(e)=>{handleChange(e)}} min={min} max={max} bind:value={value} checked={checked} disabled={disabled} class="range {range} {classes}" />
{@render children?.()}