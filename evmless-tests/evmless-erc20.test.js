const { ethers } = require("ethers");
const { solidity } = require("ethereum-waffle");
const chai = require('chai');
const expect = chai.expect;

chai.use(solidity);

describe('tests', function () {
  const initialSupply = new ethers.BigNumber.from("1337");
  const name = "Test";
  const symbol = "TEST";
  const decimals = 12;

  const evmlessErc20Address = "0x0000000000000000000000000000000000000539";
  const evmlessErc20Abi = [
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "function decimals() public view returns (uint8)",
    "function totalSupply() public view returns (uint256)",
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) public returns (bool success)",
    // "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)",
    // "function approve(address _spender, uint256 _value) public returns (bool success)",
    // "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",
  ];

  before(async function () {
    this.Provider = new ethers.providers.JsonRpcProvider('http://localhost::9933');
    this.evmlessErc20Contract = new ethers.Contract(evmlessErc20Address, evmlessErc20Abi, this.Provider);

    // 0x420e9F260B40aF7E49440ceAd3069f8e82A5230f
    this.alice = new ethers.Wallet("0f02ba4d7f83e59eaa32eae9c3c4d99b68ce76decade21cdab7ecce8f4aef81a", this.Provider);

    // 0x976f8456E4e2034179B284A23C0e0c8f6d3da50c
    this.bob = new ethers.Wallet("502f97299c472b88754accd412b7c9a6062ef3186fba0c0388365e1edec24875", this.Provider);
  });

  it('correct initial supply', async function () {
    expect(await this.evmlessErc20Contract.totalSupply()).to.equal(initialSupply);
  });

  it('correct name', async function () {
    expect(await this.evmlessErc20Contract.name()).to.equal(name);
  });

  it('correct symbol', async function () {
    expect(await this.evmlessErc20Contract.symbol()).to.equal(symbol);
  });

  it('correct decimals', async function () {
    expect(await this.evmlessErc20Contract.decimals()).to.equal(decimals);
  });

  it('correct alice balance', async function () {
    expect(await this.evmlessErc20Contract.balanceOf(this.alice.address)).to.equal(initialSupply);
  });

  it('transfer method works', async function () {
    var txAmount = 10;
    var tx = await this.evmlessErc20Contract.connect(this.alice).transfer(this.bob.address, txAmount, { from: this.alice.address });
    await tx.wait();

    expect(await this.evmlessErc20Contract.balanceOf(this.bob.address)).to.equal(txAmount);
  });
});
