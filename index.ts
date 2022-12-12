import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey } from "@solana/web3.js";
import tokenMints from "../data.json";
const fs = require("fs");

(async () => {

  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const metaplex = new Metaplex(connection);
  
  let nfts = [];

  for(let i = 0;i<tokenMints.length;i++){

    const mintAddress = new PublicKey(tokenMints[i])
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    const nft_name = nft.json.name;
    const nft_attributes = nft.json.attributes;

    data_object = {};
    var key = "name";
    var value = nft_name;
    data_object[key] = value;
    
    for(let i = 0;i<nft_attributes.length;i++){
      const key = nft_attributes[i].trait_type.toLowerCase( ).replace(/ /g,"_");
      const value = nft_attributes[i].value;
      data_object[key] = value;
    }

    console.log(data_object);
    
    nfts.push(data_object);

    fs.writeFile("nfts.json", JSON.stringify(nfts), err => {
      if (err) throw err;
    });

    await new Promise(f => setTimeout(f, 100));
    
  }
})();