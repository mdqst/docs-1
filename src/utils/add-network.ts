const networkParams = {
  chainId: "0xBA5ED", // 763373 in hexadecimal
  chainName: "Ink Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc-qnd-sepolia.inkonchain.com"],
  blockExplorerUrls: ["https://explorer-sepolia.inkonchain.com/"],
};

export async function isInkSepoliaNetwork(): Promise<boolean> {
  if (!(window as any).ethereum) return false;

  try {
    const chainId = await (window as any).ethereum.request({
      method: "eth_chainId",
    });
    return chainId.toLowerCase() === networkParams.chainId.toLowerCase();
  } catch (error) {
    console.error("Error checking network:", error);
    return false;
  }
}

export async function switchToInkSepolia(): Promise<void> {
  if (!(window as any).ethereum) return;

  try {
    // First try to switch to the network
    await (window as any).ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkParams.chainId }],
    });
  } catch (error: any) {
    // If the error code is 4902, the chain hasn't been added yet
    if (error.code === 4902) {
      await addNetwork();
    } else {
      console.error("Error switching network:", error);
    }
  }
}

export async function addNetwork() {
  if (!(window as any).ethereum) return;

  try {
    await (window as any).ethereum.request({
      method: "wallet_addEthereumChain",
      params: [networkParams],
    });
  } catch (error) {
    console.error("Error adding network:", error);
  }
}
