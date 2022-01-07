import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ContactsListScreen() {
    return (
        <View style={styles.container}>
          <Text>Contact List</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});