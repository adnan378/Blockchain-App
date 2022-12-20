//https://eth-goerli.g.alchemy.com/v2/f9j3SP1NsQdOHRyVW9LgvFXZx6auS_GW
//f9j3SP1NsQdOHRyVW9LgvFXZx6auS_GW
require(`@nomiclabs/hardhat-waffle`);

module.exports={
    solidity:'0.8.0',
    networks:{
        goerli:{
            url:'https://eth-goerli.g.alchemy.com/v2/f9j3SP1NsQdOHRyVW9LgvFXZx6auS_GW',
            accounts:[ '30df8c152a20077701b150e25753b569ca587dd0fcb2ec2fb74e69768e89fb50' ]
             
        }

    }
}
