import { ethers } from 'ethers';
 
export default class Providers {
 
    static isMetaMaskProvider () {
        return Boolean( window.web3 && window.web3.currentProvider );
    }
 
    static createProvider () {
        if (Providers.isMetaMaskProvider()) {
            // 基于浏览器插件MetaMask插件节点
            return new ethers.providers.Web3Provider( window.web3.currentProvider );
        } else {
            // InfuraProvider基于infura.io账号链接后面的Token令牌和network【ropsten是3】
            // return new ethers.providers.InfuraProvider(
            //     3, 'ea9fcb17397d4e2994424dcd677d2a2f' );
            // 基于infura.io平台的ropsten测试节点(链接必须是https开头,否则会链接失败)
            // JsonRpcProvider是基于url来连接！
            return new ethers.providers.JsonRpcProvider(
                'https://ropsten.infura.io/v3/ea9fcb17397d4e2994424dcd677d2a2f');
        }
    }
}