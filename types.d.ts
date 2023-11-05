import { ExternalProvider, Eip1193Provider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider | Eip1193Provider;
  }
}
