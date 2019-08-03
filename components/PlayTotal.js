import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function PlayTotal(props)
{
    return(
        <View style = {styles.colWrapper}>
            <Text>{props.title}</Text>
            <Text>{props.countNumber}</Text>
            <Text>{props.countPercent}%</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    colWrapper:
    {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default PlayTotal;