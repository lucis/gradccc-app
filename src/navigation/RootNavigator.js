import { StackNavigator } from "react-navigation";
import React from 'React';
import HomeScreen from "./../screens/HomeScreen";
import GradeAntigaScreen from "./../screens/GradeAntigaScreen";
import GradeNovaScreen from "./../screens/GradeNovaScreen";

export const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    GradeAntiga: {
        screen: GradeAntigaScreen,
        navigationOptions: {
            gesturesEnabled: false
          }
    },
    GradeNova: {
        screen: GradeNovaScreen,
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