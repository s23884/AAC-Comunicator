import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Rejestracja</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="Imię"
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Twój email"
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Hasło"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Powtórz hasło"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Płeć"
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Zarejestruj się</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 40,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  TextInput: {
    fontSize: 25,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
