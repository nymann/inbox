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
        <h2>Logged in as</h2>
        <svg
                role="img"
                height="48"
                width="48"
                aria-hidden="true"
                viewBox="0 0 24 24"
        >
                <path
                        d="M10.165 11.101a2.5 2.5 0 0 1-.67 3.766L5.5 17.173A2.998 2.998 0 0 0 4 19.771v.232h16.001v-.232a3 3 0 0 0-1.5-2.598l-3.995-2.306a2.5 2.5 0 0 1-.67-3.766l.521-.626.002-.002c.8-.955 1.303-1.987 1.375-3.19.041-.706-.088-1.433-.187-1.727a3.717 3.717 0 0 0-.768-1.334 3.767 3.767 0 0 0-5.557 0c-.34.37-.593.82-.768 1.334-.1.294-.228 1.021-.187 1.727.072 1.203.575 2.235 1.375 3.19l.002.002.521.626zm5.727.657-.52.624a.5.5 0 0 0 .134.753l3.995 2.306a5 5 0 0 1 2.5 4.33v2.232H2V19.77a5 5 0 0 1 2.5-4.33l3.995-2.306a.5.5 0 0 0 .134-.753l-.518-.622-.002-.002c-1-1.192-1.735-2.62-1.838-4.356-.056-.947.101-1.935.29-2.49A5.713 5.713 0 0 1 7.748 2.87a5.768 5.768 0 0 1 8.505 0 5.713 5.713 0 0 1 1.187 2.043c.189.554.346 1.542.29 2.489-.103 1.736-.838 3.163-1.837 4.355m-.001.001z"
                />
        </svg>
        <span>
                {payload.email}
        </span>
        <a href="/secret" class="meow">Secret Page</a>
        <a href="/logout">Log out</a>
</main>

<style>
        main {
                color: white;
                display: grid;
                justify-items: center;
                font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr,
                        CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva,
                        sans-serif;
                gap: 30px;
                margin-top: 48px;
        }
        svg {
                fill: white;
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
