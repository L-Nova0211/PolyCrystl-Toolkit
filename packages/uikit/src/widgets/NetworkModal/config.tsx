import PolygonChain from "./icons/PolygonChain";
import CronosChain from "./icons/CronosChain";
import { Config } from "./types";

const networks: Config[] = [
  {
    networkName: "Polygon",
    icon: PolygonChain,
    url: "https://polygon.crystl.finance/",
  },
  {
    networkName: "Cronos",
    icon: CronosChain,
    url: "https://cronos.crystl.finance/",
  },
];

export default networks;
