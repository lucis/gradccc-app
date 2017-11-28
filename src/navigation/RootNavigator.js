import { StackNavigator } from "react-navigation";
import React from 'React';
import HomeScreen from "./../screens/HomeScreen";
import GradeAntigaScreen from "./../screens/GradeAntigaScreen";
import GradeNovaScreen from "./../screens/GradeNovaScreen";
import FeedbackScreen from "./../screens/FeedbackScreen";
import LoginScreen from "./../screens/LoginScreen";

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
    },
    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Login: {
      screen: LoginScreen,
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