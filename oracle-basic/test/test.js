const DiesalContract = artifacts.require('Diesal')
const OracleConract = artifacts.require('Oracle')
const truffleAssert = require('truffle-assertions')

contract('DiesalContract', async (accounts) => {
  describe('Basic oracle get diesal price', () => {
    var _DiesalContract
    var _OracleContract

    beforeEach(async () => {
      _OracleContract = await OracleConract.new()
      _DiesalContract = await DiesalContract.new(_OracleContract.address)
    })

    it('Complete flow test :', async () => {
      await _OracleContract.setReliableSource(accounts[1])
      await truffleAssert.reverts( _OracleContract.setPrice(25),"Your not allowed to change price");
      await _OracleContract.setPrice(30,{from:accounts[1]})
      var DiesalPrice = await _DiesalContract.getDiesalPrice()
      assert.equal(DiesalPrice.toString(), '30');

    })
  })
})
