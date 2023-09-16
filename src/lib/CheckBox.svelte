<script>
        export let checked = false;
        export let checked_bg = "#1ed760";
        export let not_checked_bg = "#727272";
        export let label = "Remember me";
        function handle_space_key(event) {
                if (event.key === " ") {
                        checked = !checked;
                }
        }
</script>

<main>
        <label for="my-check-box">
                <input
                        id="my-check-box"
                        type="checkbox"
                        bind:checked
                        on:keydown={handle_space_key}
                />
                <span
                        class="wrapper"
                        style="background-color: {checked
                                ? checked_bg
                                : not_checked_bg};"
                >
                        <span id="ball" />
                </span>
        </label>
        <p>{label}</p>
</main>

<style>
        main {
                display: grid;
                grid-template-columns: repeat(2, max-content);
                column-gap: 1em;
                align-items: center;
        }
        p {
                font-size: 0.875rem;
        }

        input {
                border: 0px;
                clip: rect(0px, 0px, 0px, 0px);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0px;
                position: absolute;
                width: 1px;
        }

        span.wrapper {
                display: grid;
                border-radius: 11px;
                block-size: 16px;
                min-inline-size: 30px;
                position: relative;
                align-items: center;
        }

        #ball {
                border-radius: inherit;
                position: absolute;
                block-size: 12px;
                top: 2px;
                left: 2px;
                inline-size: 12px;
                background: #000;
                transition: left 0.2s ease;
        }

        input:checked ~ .wrapper #ball {
                left: calc(100% - 14px);
        }

        input:focus ~ .wrapper {
                box-shadow: 0 0 0 3px black, 0 0 0 6px white;
        }
</style>
