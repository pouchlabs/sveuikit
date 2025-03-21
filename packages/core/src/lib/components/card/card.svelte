<script>
    let {children,bordered=false,shadow="sm",classes=""}=$props();
</script>
<div class:border={bordered=== true} class:outline-1={bordered === true} class="bg-base-200 min-w-20 flex flex-col align-middle  min-h-20 text-base-content rounded-box top-px   max-h-[calc(100vh-8.6rem)] overflow-auto  border-white/5 shadow-{shadow }  outline-black/5 {classes} " >
{@render children?.()}
</div>