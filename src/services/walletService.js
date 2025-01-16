import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

class WalletService {
  constructor() {
    this.wallet = new PhantomWalletAdapter();
    this.connection = new Connection(clusterApiUrl("mainnet-beta"));
  }

  connectWallet = async () => {
    if (!this.wallet) {
      throw new Error("Phantom wallet not found");
    }
    try {
      await this.wallet.connect();
      return this.wallet.publicKey.toString();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      throw error;
    }
  };

  getWalletAddress = () => {
    if (!this.wallet.connected) {
      throw new Error("Wallet not connected");
    }
    return this.wallet.publicKey.toString();
  };

  disconnectWallet = async () => {
    if (this.wallet.connected) {
      await this.wallet.disconnect();
    }
  };
}

export const walletService = new WalletService();
