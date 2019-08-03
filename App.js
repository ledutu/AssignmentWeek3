import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayerCard, GameStatus, ButtonGroup, PlayTotal } from "./components";
import { CHOICES } from "./constants.js";
import { randomComputerChoice, getRoundOutCome } from "./utility";

var countTotal = 0,
  countWin = 0,
  countLose = 0,
  countTie = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: '',
      userChoice: '',
      compChoice: '',
      countTotal: 0,
      countWin: 0,
      countLose: 0,
      countTie: 0,
      countPercentWin: 0,
      countPercentLose: 0,
      countPercentTie: 0,
    }
  }

  onPressButton = playerChoice => {
    const round = x => {
      var n = parseFloat(x),
      x = Math.round(n * 100)/100;
      return x;
    }
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice);
    const computerChoice = randomComputerChoice()
    const result = getRoundOutCome(foundChoice.name, computerChoice.name);
    if (result === "Victory!") {
      countWin++;
    }
    else if (result === "Defeat!") {
      countLose++;
    }
    else {
      countTie++;
    }
    countTotal++;
    const countPercentWin = round((countWin * 100) / countTotal);
    const countPercentLose = round((countLose * 100) / countTotal);
    const countPercentTie = round((countTie * 100) / countTotal);
    this.setState({
      playerChoice: foundChoice,
      computerChoice: computerChoice,
      result: result,
      userChoice: foundChoice.name,
      compChoice: computerChoice.name,
      countTotal: countTotal,
      countWin: countWin,
      countLose: countLose,
      countTie: countTie,
      countPercentWin: countPercentWin,
      countPercentLose: countPercentLose,
      countPercentTie: countPercentTie,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.result} />
        </View>
        <View style={styles.playTotalWrapper}>
          <PlayTotal title="Total" countNumber={this.state.countTotal} countPercent = "100"/>
          <PlayTotal title="Win" countNumber={this.state.countWin} countPercent = {this.state.countPercentWin}/>
          <PlayTotal title="Lose" countNumber={this.state.countLose} countPercent = {this.state.countPercentLose}/>
          <PlayTotal title="Tie" countNumber={this.state.countTie} countPercent = {this.state.countPercentTie}/>
        </View>
        <View style={styles.gamePlayerWrapper}>
          <PlayerCard playerName="Player" choice={this.state.playerChoice} choosen={this.state.userChoice} />
          <PlayerCard playerName="Computer" choice={this.state.computerChoice} choosen={this.state.compChoice} />
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gameStatusWrapper:
  {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  playTotalWrapper:
  {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  gamePlayerWrapper:
  {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'black',
    margin: 8
  },
  buttonGroupWrapper:
  {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
