import { EthMappingObject, EnvMappingObject } from "./dynamicToken.types";

/*
  How should be mapped
  local,dev -> DUMMY,
  staging, prod -> DAI,
  staging-ropsten -> PLR,
  staging-kovan -> TEST
*/

export const TEST_NET_MAPPING_OBJECT: EthMappingObject = {
  rinkeby: "DAI",
  ropsten: "PLR",
  kovan: "TEST",
};

export const ENV_MAPPING_OBJECT: EnvMappingObject = {
  local: "Dummy",
  PROD: "DAI",
};
