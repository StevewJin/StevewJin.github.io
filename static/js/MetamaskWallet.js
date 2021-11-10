import Providers from './Providers.js';
 
export default class MetamaskWallet {
    constructor () {
        this.initProvider();
        this.signer = this.provider.getSigner();
    }
 
    initProvider () {
        if (!Providers.isMetaMaskProvider()) {
            throw Error( '您正在使用当前离线钱包,暂时不能使用MetaMask钱包或先退出当前离线钱包！' );
        }
        this.provider = this.provider = Providers.createProvider();
        console.log( '您正在使用的是MetaMask浏览器钱包！！！' );
    }
}