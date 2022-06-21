require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad good clip off trigger'; 
let testAccounts = [
"0x053ba6ddfbf5a7ac8d5cd63c29d04282097b4a83dd3f02087b0d24340b0cf142",
"0xc1bc8e90df2832d2addf6a22e34dbff7446540c304edde760eadd5c7a56b6979",
"0x6a7e82fd7e97fe918ff6aa605f5935ee2bf36b3d179a6a29d5c700870162bffa",
"0xa7ad2e0a26a52b41e8e47db7a6b77256fe73066bf9e1b178d00e6d290c148736",
"0xa953c17963013cec32db81ba87dc094fd6cfaf4aad59caea6d3a2d01df6eb27f",
"0x60b667dac9f2bab43245005a423007b84fe5188eec28d926dd64612b6ee183a8",
"0x17e8b66aa35b39aef2ad407799d3ab352f288350eb550fb9a3b65a95f716bf2b",
"0x878085e27a32ceedc3b01e3f05ff81ad39b5566c075263b2a09996f3b3d7adce",
"0x7137c6c1a4d1a0949acbde211df774935d627de0d021ecacdf7d76a7125bfa6d",
"0xa48e20293ab394dfb1612128a00a5d4bc60e8075fe7168728e1b5b7e2aeafc33"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

