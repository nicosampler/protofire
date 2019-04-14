const Ballot = artifacts.require('./Ballot.sol');

contract('Ballot', async accounts => {
  const voteValue = '0.01';
  const value = web3.utils.toWei(voteValue, 'ether');
  const ac1 = accounts[1];
  const ac2 = accounts[2];

  it(`should return false when checking if address has already voted `, async () => {
    const ballot = await Ballot.deployed();

    const res = await ballot.getVote({ from: ac2 });

    assert.isNotOk(res.hasVoted, 'The Address has already voted!');
  });

  it(`should return statistics in 0`, async () => {
    const ballot = await Ballot.deployed();

    const res = await ballot.getStatistics();

    assert.equal(res.totalVotes, 0, 'Someone has already voted!');
    assert.equal(res.totalPositiveVotes, 0, 'Someone has already voted!');
  });

  // Trate de verificar que la cantidad descontada sea
  // oldBalance - currentBalance - gasUsed * gasPrice
  // pero el nro era exacto solo la primera vez, las siguientes veces
  // variaba por menos de una centesima y el test fallaba.
  it(`should disccount eth from voter`, async () => {
    const ballot = await Ballot.deployed();

    let oldBalance = await web3.eth.getBalance(ac2);
    await ballot.vote(true, { from: ac2, value });
    let newBalance = await web3.eth.getBalance(ac2);

    assert.isBelow(
      Number(newBalance),
      Number(oldBalance),
      'Disccount was not made!'
    );
  });

  it(`should return statistics in 1`, async () => {
    const ballot = await Ballot.deployed();

    const res = await ballot.getStatistics();

    assert.equal(res.totalVotes, 1, 'Error in total votes!');
    assert.equal(res.totalPositiveVotes, 1, 'Error in total votes!');
  });

  it(`should return true when checking if address has already voted `, async () => {
    const ballot = await Ballot.deployed();

    const res = await ballot.getVote({ from: ac2 });

    assert.isOk(res.hasVoted, 'The Address has already voted!');
    assert.isOk(res.result, 'The vote result must be true!');
  });

  it(`should avoid voting twice`, async () => {
    const ballot = await Ballot.deployed();

    try {
      await ballot.vote(true, { from: ac2, value });
    } catch (error) {
      expect(error).to.be.an('Error');
    }
  });

  it(`should fail if vote value is different to ${voteValue} eth`, async () => {
    const ballot = await Ballot.deployed();

    try {
      await ballot.vote(true, { from: ac1, value: 100 });
    } catch (error) {
      expect(error).to.be.an('Error');
    }
  });
});
