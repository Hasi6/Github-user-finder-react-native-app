import React from 'react';
import { Text, View } from 'react-native';

// created Components
import Header from './src/components/Header';
import UsersList from './src/components/UsersList';

export default function App() {
  return (
    <View>
      <Header headerText={'Github Users'} />
      <UsersList />
    </View>
  );
}
