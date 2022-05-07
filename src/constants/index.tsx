import { DrawerType } from "./types";

const PATHNAME = {
  LOGIN: "/login",
  INGAME: "/game",
  CREATE__NFT: "/create/nft"
}

const DRAWER_LIST: DrawerType[] = [
  {
    name: "Create",
    linkTo: PATHNAME.CREATE__NFT
  }
]

export {
  PATHNAME,
  DRAWER_LIST
}