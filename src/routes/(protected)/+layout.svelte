<script>
        import { is_authenticated } from "$lib/store";
        import AuthixClient from "$lib/authix_client";
        import { goto } from "$app/navigation";
        import { get } from "svelte/store";
        import { onMount } from "svelte";

        const client = new AuthixClient("http://127.0.0.1:8660");
        let authenticated = false;

        onMount(async () => {
                if (get(is_authenticated)) {
                        console.log(`+layout.svelte: Already authenticated`);
                        authenticated = true;
                        return;
                }
                if (await client.access_token()) {
                        authenticated = true;
                        return;
                }
                authenticated = false;
                goto("/login");
        });
</script>

<main>
        {#if authenticated}
                <slot />
        {/if}
</main>
