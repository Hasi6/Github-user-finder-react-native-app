import React from 'react';
import { Text, View } from 'react-native';

// created Components
import Card from './Card';

const UserDetails = (props) => {
    return (
        <Card>
            {props.children}
        </Card>
    );
};

export default UserDetails;