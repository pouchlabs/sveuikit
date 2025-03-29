<script lang="ts">
    let {checked=false,variant="",size="",disabled=false,children,classes=""}=$props()
</script>
<input type="radio" checked={checked} disabled={disabled} class="radio radio-{variant} radio-{size} {classes}" />
{@render children?.()}