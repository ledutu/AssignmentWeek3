import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function GameStatus(props)
{
    if(props.result === 'Victory!')   
    {
        return(
            <Text style={styles.textWin}>{props.result}</Text>
        )
    } 
    if(props.result === 'Defeat!')
    {
        return(
            <Text style={styles.textLose}>{props.result}</Text>
        )
    }
    if(props.result === 'Tie Game!')
    {
        return(
            <Text style={styles.textTie}>{props.result}</Text>
        )
    }
    return(
        <Text style={styles.text}>Start{props.result}</Text>
    )
    
}

const styles = StyleSheet.create({

    text:
    {
        fontSize:35,
        fontWeight:'600',
    }, 
    textWin:
    {
        fontSize:35,
        fontWeight:'600',
        color: 'green'
    },
    textLose:
    {
        fontSize:35,
        fontWeight:'600',
        color: 'red'
    },
    textTie:
    {
        fontSize:35,
        fontWeight:'600',
        color: 'black'
    }
})

export default GameStatus;