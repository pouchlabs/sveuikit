<script>
    let {children,bordered=false,shadow="sm",classes=""}=$props();
</script>

<div class:border={bordered=== true} class:outline-1={bordered === true} class="bg-base-200 trancateTexts relative  min-w-20 flex flex-col align-middle  min-h-20 text-base-content rounded-box top-px    border-white/5 shadow-{shadow }  outline-black/5 {classes} " >
{@render children?.()}
</div>
