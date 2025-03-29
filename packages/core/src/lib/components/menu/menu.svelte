<script lang="ts">
 let {children,direction="verticle",classes="",size="xs",responsive=false} =$props()
</script>
<div class:lg:menu-horizontal={responsive === true} class="menu rounded-box  menu-{+direction.trim()} menu-{+size} {classes}">
   {#if children}
     {@render children()}
   {/if}
</div>
