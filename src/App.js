import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function initate() {
      const _provider = await detectEthereumProvider();
      const provider = new ethers.providers.Web3Provider(_provider);

      if (provider) {
        setProvider(provider);
      } else {
        alert("install metamask");
      }
    }
    initate();
  }, []);
  return (
    <div className="App">
      <h1>Escrow Contract app</h1>
      <span>Active contract address {}</span>
    </div>
  );
}

export default App;
