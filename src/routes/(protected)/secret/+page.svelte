<script>
        import { access_token } from "$lib/store";
        import { decodeJwt } from "jose";
        let payload = "";

        access_token.subscribe((value) => {
                if (!value) {
                        return;
                }
                payload = decodeJwt(value);
        });
</script>

<main>
        <div class="user-info">
                {#each Object.entries(payload) as [key, value]}
                        <div class="row">
                                <span class="key">{key}</span><span
                                        class="value">{value}</span
                                >
                        </div>
                {/each}
        </div>
        <a href="/" class="meow">Home</a>
        <a href="/logout">Log out</a>
</main>

<style>
        main {
                margin-top: 48px;
                color: white;
                display: grid;
                justify-items: center;
                font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr,
                        CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva,
                        sans-serif;
                gap: 30px;
        }
        .user-info {
                padding: 30px;
                background-color: #a5bbd1;
                color: black;
                display: grid;
                row-gap: 1em;
                border-radius: 3px;
        }
        .row {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: space-between;
                padding-bottom: 10px;
                border-bottom: 1px solid gray;
        }
        span.key {
                color: #222222;
        }
        a.meow {
                border-radius: 500px;
                background-color: rgb(30, 215, 96);
                padding-block: 8px;
                padding-inline: 32px 32px;
                color: black;
                font-size: 16px;
        }
        a {
                color: #7a7a7a;
                text-decoration: none;
                letter-spacing: 0.1em;
                font-weight: 700;
                font-size: 14px;
        }
</style>
