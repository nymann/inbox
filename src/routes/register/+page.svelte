<script>
        import { goto } from "$app/navigation";
        import AuthixClient from "../../lib/authix_client";
        const client = new AuthixClient("http://127.0.0.1:8660");
        let email = "";
        let password = "";

        async function handleSubmit() {
                if (await client.register(email, password)) {
                        goto("/login");
                } else {
                        alert(":-(");
                }
        }
</script>

<main>
        <h1>Registration</h1>
        <form on:submit={handleSubmit}>
                <label>
                        Email:
                        <input type="email" bind:value={email} required />
                </label>
                <label>
                        Password:
                        <input type="password" bind:value={password} required />
                </label>
                <button type="submit">Register</button>
        </form>
        <a href="/">Back to Login</a>
</main>
