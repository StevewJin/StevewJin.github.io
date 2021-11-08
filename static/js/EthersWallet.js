import { Wallet } from 'ethers';
import Providers from './Providers.js';
 
export default class EthersWallet {
    constructor () {
        this.initProvider();
    }
 
    initProvider () {
        if (Providers.isMetaMaskProvider()) {
            throw Error( '浏览器已经提供了MetaMask钱包,不能再创建其他离线钱包了！' );
        }
        this.provider = this.provider = Providers.createProvider();
        console.log( '您正在使用的是离线钱包！！！' );
    }
 
    // 私钥生成钱包！
    generate_private_key_wallet ( private_key ) {
        return new Wallet( private_key, this.provider );
    }
 
    // 助记词生成钱包！
    generate_mnemonric_wallet ( mnemonric, path = `m/44'/60'/0'/0/0` ) {
        // 必须连接provider才是活跃钱包
        return Wallet.fromMnemonic( mnemonric, path ).connect( this.provider );
    }
 
    // keystore.json文件生成钱包
    async generate_keystore_wallet ( keystore_json_string, password, progressCallback = null ) {
        // 必须连接provider才是活跃钱包
        let off_wallet = await Wallet.fromEncryptedJson( keystore_json_string, password, progressCallback );
        return off_wallet.connect( this.provider );
    }
 
    // 随机创建一个钱包
    create_new_wallet () {
        return Wallet.createRandom().connect( this.provider );
    }
}