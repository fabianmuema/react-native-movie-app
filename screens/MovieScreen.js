import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements'

const GreeterText = [
  'watch today?', 'do today?', 'stream today?', 'listen to today?'
]

var randomNumber = Math.floor(Math.random() * (GreeterText.length))

export default function MovieScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <LinearGradient colors={['#000000', '#000']} style={styles.linearGradient}></LinearGradient>

        <View style={styles.Greeter}>
          <Text style={styles.greeterText}>
            Hello, Fabian!
          </Text>
          <Text style={styles.underGreeter}>What would you like to</Text>
          <Text style={styles.underUnderGreeter}>{GreeterText[randomNumber]}</Text>
        </View>

        <View style={styles.movieScreen}>
          <SearchBar placeholder = 'Search movies/shows/music...'
          style = {
            styles.searchBar
          }
          platform = {
            'ios'
          }
          round = {
            true
          }
          containerStyle = {
            {
              backgroundColor: 'transparent',
              width: 290,
              borderWidth: 0,
              marginLeft: 20
            }
          }
          inputContainerStyle = {
            {
              borderRadius: 20
            }
          }
          cancelButtonTitle = {true}
          inputStyle = {
            {
              backgroundColor: 'lightgrey',
              fontSize: 14,
              paddingLeft: 5
            }
          }
          lightTheme = {
            true
          }
          clearIcon={true}
          />
          </View>
      </ScrollView>
    </View>
  );
}

MovieScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  movieScreen: {
    backgroundColor: 'white',
    position: "relative",
    top: -114,
    width: 400,
    height: 200,
    borderTopLeftRadius: 30,
  },
  container: {
    flex: 1,
  },
  linearGradient: {
    width: 400,
    height: 200,
  },
  Greeter: {
    position: 'relative',
    top: -130,
    paddingLeft: 20
  },
  greeterText: {
    color: 'lightgrey',
    opacity: 0.5
  },
  underGreeter: {
    color: 'white',
    fontSize: 25
  },
  underUnderGreeter: {
    color: 'white',
    fontSize: 25
  }
});
