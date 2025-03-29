<script lang="ts">
    let {checked=false,variant="",size="",disabled=false,children,classes=""}=$props()
</script>
<input type="checkbox" checked={checked} disabled={disabled} class="checkbox checkbox-{variant} checkbox-{size} {classes}" />
{@render children?.()}
