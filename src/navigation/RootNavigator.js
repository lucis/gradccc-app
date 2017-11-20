import { StackNavigator } from "react-navigation";
import React from 'React';
import HomeScreen from "./../screens/HomeScreen";

export const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "screen",
    mode: "modal"
  }
);