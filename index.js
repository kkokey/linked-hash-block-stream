const Crypto = require('crypto-js')

const block = {
	prevBlockHash: '',
	nextBlockHash: '',
	data: '',
	hash: ''
}

const init = () => {
  block.data = 'initialize'
  const hash = Crypto.SHA256(block);
  console.log(hash.toString());
};

init();

