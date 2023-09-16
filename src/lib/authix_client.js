import { access_token, is_authenticated } from "./store";
import { decodeJwt } from "jose";

class AuthixClient {
  constructor(base_url) {
    this.base_url = base_url;
  }

  async register(email, password) {
    try {
      const response = await fetch(`${this.base_url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      return response.ok;
    } catch (error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
  async login(email, password, remember_me) {
    try {
      const response = await fetch(`${this.base_url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, remember_me }),
        credentials: "include",
      });
      return await this.handle_authentication(response);
    } catch (error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
  async handle_authentication(response) {
    if (response.ok) {
      const new_access_token = response.headers.get("authorization");
      sessionStorage.setItem("access_token", new_access_token);
      access_token.set(new_access_token);
      is_authenticated.set(true);
      console.log(`Got new Access Token from Authix`);
      return true;
    }
    return false;
  }

  async get_access_token_from_storage() {
    const new_access_token = sessionStorage.getItem("access_token");
    if (new_access_token == null) {
      return null;
    }
    const payload = decodeJwt(new_access_token);
    const exp = new Date(payload.exp * 1000);
    if (Date.now() < exp) {
      access_token.set(new_access_token);
      return new_access_token;
    }

    console.log("Token has expired");
    console.log(payload);
    return null;
  }
  async access_token() {
    let access_token = await this.get_access_token_from_storage();
    if (access_token != null) {
      console.log(`Re-used Access Token from Session Storage`);
      return access_token;
    }
    return this.fetch_access_token();
  }
  async fetch_access_token() {
    try {
      const response = await fetch(`${this.base_url}/access_token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      return await this.handle_authentication(response);
    } catch (error) {
      console.log(error);
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
  async logout() {
    try {
      const response = await fetch(`${this.base_url}/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        access_token.set(null);
        sessionStorage.removeItem("access_token");
        is_authenticated.set(false);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
}

export default AuthixClient;
