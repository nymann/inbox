<script>
        import { goto } from "$app/navigation";
        import AuthixClient from "$lib/authix_client";
        const client = new AuthixClient("http://127.0.0.1:8660");
        let email = "mark@mark.dk";
        let password = "Icon#Repulsive3#Washday";
        let remember_me = false;

        async function handleSubmit() {
                if (await client.login(email, password, remember_me)) {
                        goto("/");
                }
        }
</script>

<main>
        <div class="container">
                <h1>Log in to Workie</h1>
                <form on:submit={handleSubmit}>
                        <div class="label-group">
                                <label for="email">Email</label>
                                <input
                                        type="email"
                                        bind:value={email}
                                        required
                                        placeholder="Email"
                                />
                        </div>
                        <div class="label-group">
                                <label for="password">Password</label>
                                <input
                                        type="password"
                                        bind:value={password}
                                        required
                                        placeholder="Password"
                                />
                        </div>
                        <div class="checkbox-group">
                                <input
                                        type="checkbox"
                                        bind:checked={remember_me}
                                />
                                <label for="remember_me">Remember me</label>
                        </div>
                        <button type="submit">Log in</button>
                </form>
                <hr />
                <span
                        >Don't have an account?
                        <a href="/register">Sign up for Workie</a>
                </span>
        </div>
</main>

<style>
        main {
                display: grid;
                grid-template-areas: ". container .";
                grid-template-columns: 1fr max-content 1fr;
        }
        .container {
                grid-area: container;
                display: grid;
                justify-items: center;
                background-color: black;
                color: white;
                row-gap: 20px;
                padding: 60px;

                font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr,
                        CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva,
                        sans-serif, Helvetica, Arial, sans-serif;
        }
        form {
                display: grid;
                gap: 1.5em;
        }
        .label-group {
                display: grid;
                row-gap: 5px;
                grid-template-columns: 1fr;
        }
        .checkbox-group {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 0.5em;
                align-items: center;
        }
        button {
                padding: 10px;
                border-radius: 30px;
                border: 0px;
                font-weight: 700;
                position: relative;
                transition: border-color 0.3s ease;
                background-color: #1ed760;
                outline: none;
        }
        button::before {
                content: "";
                border: 3px solid #000;
                position: absolute;
                top: -3px;
                left: -3px;
                right: -3px;
                bottom: -3px;
                border-radius: inherit;
                pointer-events: none;
        }
        button:focus {
                border: 6px solid white;
        }
        hr {
                border-width: 1px medium medium;
                border-style: solid none none;
                border-color: rgb(51, 51, 51);
                padding: 0 200px;
                margin: 15px 40px;
                padding-right: 200px;
                justify-self: center;
        }
        span {
                color: #a7a7a7;
        }
        a {
                text-decoration: underline;
                color: white;
        }
        label {
                font-size: 0.875rem;
                font-weight: 700;
        }
        input {
                font-size: 1rem;
                padding: 8px;
                border-radius: 4px;
                border: 1px solid #a7a7a7;
                color: white;
                background: #1a1a1a;
        }
        input:focus {
                outline: none;
                border: 3px solid white;
        }
        input:hover {
                border-color: white;
        }
        input::placeholder {
                color: #a7a7a7;
        }
</style>
