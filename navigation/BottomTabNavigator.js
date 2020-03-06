import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import MovieScreen from '../screens/MovieScreen';
import LinksScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/MusicScreen';
import ShowsScreen from '../screens/ShowsScreen';
import { Image, StyleSheet } from 'react-native';
import pic from '../assets/images/download.png';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Movies';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-film" />,
        }}
      />
      <BottomTab.Screen
        name="Shows"
        component={ShowsScreen}
        options={{
          title: 'Shows',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-tv" />,
        }}
      />
      <BottomTab.Screen
        name="Music"
        component={AboutScreen}
        options={{
          title: 'Music',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-musical-note" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={LinksScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Image source={pic} style={styles.pic}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Movies':
      return 'Movies';
    case 'Shows':
      return 'Shows'
    case 'Music':
      return 'Music';
    case 'Profile':
      // TODO: username
      return 'Fabian Muema';
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 25,
    height: 25,
    borderRadius: 50
  }
})
