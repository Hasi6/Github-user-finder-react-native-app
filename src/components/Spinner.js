import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    const { spinnerStyles } = styles;
    return (
        <View style={spinnerStyles}>
            <ActivityIndicator size={props.size || 'large'}/>
        </View>
    )
}

const styles = {
    spinnerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
}
export default Spinner;