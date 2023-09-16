<script>
        import { access_token } from "$lib/store";
</script>

<main>
        <h1>{$access_token}</h1>
        <a href="/logout">Logout</a>
        <a href="/secret">Secret Page</a>
</main>
