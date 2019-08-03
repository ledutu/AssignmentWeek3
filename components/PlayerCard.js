import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function PlayerCard(props)
{   
    return(
        <View style={styles.column}>
            <Text style={styles.textPlayer}>{props.playerName}</Text>
            <Image
                source={{
                    uri: props.choice.uri
                }}
                resizeMode="contain"
                style={styles.choiceImage}
            />
            <Text style={styles.textChosen}>{props.choosen}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    column:
    {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    choiceImage:
    {
        width: 150,
        height: 150,
    },
    textPlayer:
    {
        fontSize: 20,
        fontWeight: "600",
    },
    textChosen:
    {
        fontSize: 20,
    }
})

export default PlayerCard;