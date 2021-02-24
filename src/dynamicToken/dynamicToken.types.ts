export type EthTestNetsNames = "rinkeby" | "ropsten" | "kovan";

export type EthMappingObject = {
  [key in EthTestNetsNames]: string;
};

export type EnvMappingObject = {
  [key in string]: string | "Dummy";
};
