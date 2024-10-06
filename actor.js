import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from './path_to_generated_idl'; // Sesuaikan dengan IDL canister
import { Principal } from '@dfinity/principal';

// URL host ke IC
const IC_HOST = "https://ic0.app";

// Principal dari canister
const canisterId = "your-canister-id";

// Membuat HttpAgent untuk komunikasi dengan IC
const agent = new HttpAgent({ host: IC_HOST });

// Jika ingin berinteraksi dengan IC versi development (local):
// const agent = new HttpAgent({ host: "http://localhost:8000" });

// Pilihan untuk membuat Actor
const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId: Principal.fromText(canisterId),
});

// Contoh memanggil method di canister
async function fetchFromCanister() {
  try {
    const response = await actor.someMethod(); // Ganti dengan method dari canister
    console.log('Response from canister:', response);
  } catch (error) {
    console.error('Error fetching from canister:', error);
  }
}

fetchFromCanister();
