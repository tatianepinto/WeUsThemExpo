import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddContact from './components/addContact';
import ContactsListScreen from './components/contactsListScreen';
import { Component } from 'react';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
  console.log("Navigate function");
  console.log("navigationRef.isReady(): " + navigationRef.isReady());
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

class App extends Component {
  
  render() {
    return (
      <NavigationContainer  ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            component={ContactsListScreen}
            options={{
              // headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => {
                    navigate('AddContact');
                    console.log("Pressed");
                  }}

                  title="+ Add"
                  color="#f54242"
                />
              ),
            }}
          />
          <Stack.Screen name="AddContact" component={AddContact} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
