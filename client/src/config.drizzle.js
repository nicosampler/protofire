import Ballot from "./contracts/Ballot.json";

export default {
  contracts: [
    Ballot
  ],
  web3: {
    fallback: {
      type: process.env.REACT_APP_DRIZZLE_WEB3_TYPE,
      url: process.env.REACT_APP_DRIZZLE_WEB3_URL
    }
  }
};
