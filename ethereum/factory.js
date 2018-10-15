import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4009c4A330f9A40eb939B85671799427c9d4D757'
);

export default instance;
