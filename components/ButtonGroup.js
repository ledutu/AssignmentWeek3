import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CHOICES } from "../constants.js";

function ButtonGroup(props)
{
    return(
            CHOICES.map(item => {
                return(
                    <TouchableOpacity 
                    key={item.name}
                    style={styles.button}
                    onPress={() => props.onPressButton(item.name)}
                    >
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ) 
            })
    )
}
const styles = StyleSheet.create({
    button:
    {
        backgroundColor:'brown',
        marginVertical:8,
        borderRadius:8,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:
    {
        color:'white',
        fontSize:20,
        fontWeight:'600',
    }
})

export default ButtonGroup;