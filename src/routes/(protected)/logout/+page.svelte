<script>
        import { goto } from "$app/navigation";
        import AuthixClient from "$lib/authix_client";
        import { onMount } from "svelte";
        const client = new AuthixClient("http://127.0.0.1:8660");

        onMount(() => {
                client.logout();
                goto("/login");
        });
</script>
