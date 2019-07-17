import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput 
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText} />
        </View>
    );
}

export default Input;