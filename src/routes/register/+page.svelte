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
        <div class="container">
                <h1>Sign up to Workie</h1>
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
                        <button type="submit">Sign up</button>
                </form>
                <hr />
                <span
                        >Have an account?
                        <a href="/login">Log in</a>
                </span>
        </div>
</main>

<style>
        main {
                margin-top: 48px;
                display: grid;
                grid-template-areas: ". container .";
                grid-template-columns: 1fr max-content 1fr;
        }
        .container {
                grid-area: container;
                border-radius: 5px;
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
        h1 {
                font-size: 3rem;
        }
        form {
                width: 328px;
                display: grid;
                gap: 1.5em;
        }
        .label-group {
                display: grid;
                row-gap: 5px;
                grid-template-columns: 1fr;
        }
        button:hover {
                transform: scale(1.04);
                background-color: #1fdf64;
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
        button:focus {
                box-shadow: 0 0 0 3px black, 0 0 0 6px white;
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
                font-size: 1rem;
                font-weight: 400;
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
                height: 30px;
                border-radius: 4px;
                box-shadow: inset 0 0 0 1px #878787;
                border: 0px;
                color: white;
                background: #1a1a1a;
        }
        input:focus {
                outline: none;
                box-shadow: inset 0 0 0 3px white;
        }
        input:hover {
                border-color: white;
        }
        input::placeholder {
                color: #a7a7a7;
        }
</style>
