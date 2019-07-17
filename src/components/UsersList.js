import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

// created components
import UserDetails from './UserDetails';
import Input from './Input';
import Card from './Card';
import CardSection from './CardSection';


class UsersList extends Component {

    state = { 
        user: {},
        text: ''
};

    render() {
        const { imageStyle } = styles; 
        const onChange = async(text) => {
            await this.setState({text: text});
            const result = await axios.get(`https://api.github.com/users/${this.state.text}`);
            this.setState({ user: result.data });
    }
    return (
        <Card>
                <Input
                    value={this.state.text}
                    onChangeText={ texts => onChange(texts) }
                    placeholder="Enter Github Username"
                     />
                <UserDetails>
                    <Text>Name: {this.state.user.name}</Text>
                </UserDetails>
                <UserDetails>
                    <Text>Bio: {this.state.user.bio}</Text>
                </UserDetails>
                <UserDetails>
                    <Text>Company: {this.state.user.company}</Text>
                </UserDetails>
                <UserDetails>
                    <Text>Public Repos: {this.state.user.public_repos}</Text>
                </UserDetails>
                <CardSection>
                    <Image source={{uri: this.state.user.avatar_url}} style={imageStyle}/>
                </CardSection>
        </Card>
    );
}
}

const styles = {
    headerContentStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    headerTextStyle: {
      fontSize: 20
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };

export default UsersList;