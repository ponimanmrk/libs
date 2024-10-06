import { AuthClient } from "@dfinity/auth-client";

async function login() {
  const authClient = await AuthClient.create();
  await authClient.login({
    identityProvider: "https://identity.ic0.app",
    onSuccess: () => {
      console.log("Login successful");
    },
  });
}
