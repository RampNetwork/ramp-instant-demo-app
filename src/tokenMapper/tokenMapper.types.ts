export type EthTestNetsNames = "Rinkeby" | "Ropsten" | "Kovan";

export type EthMappingObject = {
  [key in EthTestNetsNames]: string;
};

export type EnvMappingObject = {
  [key in string]: "Dummy" | "Dai";
};
