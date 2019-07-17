import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'relative',
        marginTop: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    textStyle: {
        fontSize: 20,
        color: 'black'
    }
}

export default Header;