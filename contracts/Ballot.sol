pragma solidity ^0.5.0;

contract Ballot {
    mapping(address => Voter) voters;
    uint voteCost = 10000000000000000;
    struct Voter  {
      bool voted;
      bool voteResult;
    }

    uint public totVotes;
    uint public totPositiveVotes;

    function getStatistics() public view returns (uint totalVotes, uint totalPositiveVotes) {
      return (totVotes, totPositiveVotes);
    }

    function getVote() public view returns (bool hasVoted, bool result) {
      Voter memory currentVoter = voters[msg.sender];
      return (currentVoter.voted, currentVoter.voteResult);
    }

    function vote(bool voteResult) public payable returns(bool sufficient){
      Voter storage sender = voters[msg.sender];

      require(!sender.voted, "Already voted.");
      require(msg.value == voteCost, "The message value must be 0.01 ether");

      sender.voted = true;
      sender.voteResult = voteResult;

      totVotes += 1;
      if (voteResult) {
        totPositiveVotes += 1;
      }

      return true;
    }
}