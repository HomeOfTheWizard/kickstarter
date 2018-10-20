import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7E37F6aD0893c557AC995dB8E341cd70FA531932'
);

export default instance;
