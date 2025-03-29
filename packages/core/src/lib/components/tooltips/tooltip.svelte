<script lang="ts">
    let {title="tip",children,variant="",placement="",open=false,classes=""}=$props()
</script>

<div class:tooltip-open={open === true} class="tooltip tooltip-{placement} tooltip-{variant} {classes}" data-tip="{title}">
    {@render children?.()}
</div>