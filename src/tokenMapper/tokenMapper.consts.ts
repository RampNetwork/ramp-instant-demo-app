import { EthMappingObject, EnvMappingObject } from "./tokenMapper.types";

export const TEST_NET_MAPPING_OBJECT: EthMappingObject = {
  Kovan: "DAI",
  Rinkeby: "PLR",
  Ropsten: "TEST",
};

export const ENV_MAPPING_OBJECT: EnvMappingObject = {
  local: "Dummy",
  PROD: "Dai",
};
