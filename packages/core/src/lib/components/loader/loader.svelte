<script>
let {show=false,children,classes,type="ring",size="xs",variant="primary"}=$props();

</script>
<div class="flex items-center justify-center {classes} ">
    <span class:hidden={!show} class="loading loading-{type} loading-{size} cursor-pointer text-{variant}">
 
    </span>
    {@render children?.()}
</div>
