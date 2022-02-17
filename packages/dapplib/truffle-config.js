require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note random unlock grace creek equal gauge'; 
let testAccounts = [
"0xaf942d8f7d6bfd22cb5492c8d2fe56f041a999d56d822b8b44cfe211ca825182",
"0x81c14fa113359239bfb6a4ef4056df6de95dac8f803c37d3aa810fb93b82867d",
"0xa8f7d0043b655f08966ee6994050adbb997aa7c901d01e25ad1950c100e825d5",
"0x80cb1618c34535d36fd1c38cb48b0b8a82318f4bea076686da9eb84557b467fe",
"0xea91dd4ddd611d2fbc5c1821eae36090795c0ec37ff3ddc723fc5f92151e9ddc",
"0x6000f79c784cfcf4723abc27a47747f177517ca4f1ac02ab985e2dbbb189dc3f",
"0x20b83a171d55bf8da3ab29f9d6aff756d16a1cdad8906f5012bc935f2e93c440",
"0x9342ac092ea1ceca4e0a3828b00c912e535128a11634d668ce428efb61b1f93e",
"0x450dfe11068d3efb5fe93c59c723bdea6f95a419f8f92149f6bf2aff6626aa13",
"0x143f2cd5e92a7df5fb7017e7829d18113e718a113167acd2c87b6ce2694ccac5"
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

