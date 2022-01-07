import * as React from 'react';
import { Image, StyleSheet, TextInput, Text, View, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import LocalDB from './asyncStorage';

export default function AddContact() {
  const [fName, onChangefName] = React.useState(null);
  const [lName, onChangelName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={imageUploaderStyles.container}>
        {
          image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        }

        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangefName}
        value={fName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangelName}
        value={lName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="number"
      />
      <Button
        style={styles.button}
        // onPress={LocalDB.saveData(JSON.stringify({
        //   'fName': fName,
        //   'lName': lName
        // }))}
        title="Save"
        color="#f54242" />
    </View>
  );
}

const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // minWidth: '20%',
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 500
  }
});