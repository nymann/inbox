import { writable } from "svelte/store";

export const access_token = writable(null);
export const is_authenticated = writable(false);
