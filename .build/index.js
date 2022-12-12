var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_js = __toModule(require("@metaplex-foundation/js"));
var import_web3 = __toModule(require("@solana/web3.js"));
var import_data = __toModule(require("../data.json"));
const fs = require("fs");
(async () => {
  const connection = new import_web3.Connection("https://api.mainnet-beta.solana.com");
  const metaplex = new import_js.Metaplex(connection);
  let holders = [];
  let nfts = [];
  for (let i = 0; i < import_data.default.length; i++) {
    const mintAddress = new import_web3.PublicKey(import_data.default[i]);
    const nft = await metaplex.nfts().findByMint({ mintAddress });
    const nft_name = nft.json.name;
    const nft_attributes = nft.json.attributes;
    data_object = {};
    var key = "name";
    var value = nft_name;
    data_object[key] = value;
    for (let i2 = 0; i2 < nft_attributes.length; i2++) {
      const key2 = nft_attributes[i2].trait_type.toLowerCase().replace(/ /g, "_");
      const value2 = nft_attributes[i2].value;
      data_object[key2] = value2;
    }
    console.log(data_object);
    nfts.push(data_object);
    fs.writeFile("nfts.json", JSON.stringify(nfts), (err) => {
      if (err)
        throw err;
    });
    await new Promise((f) => setTimeout(f, 100));
  }
})();
//# sourceMappingURL=index.js.map
