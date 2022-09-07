import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import UserScreen from "./screens/UserScreen.js";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Drawer.Navigator*/}
      {/*  initialRouteName="WelcomeScreen"*/}
      {/*  screenOptions={{*/}
      {/*    drawerActiveTintColor: "#3a185b",*/}
      {/*    drawerStyle: { backgroundColor: "#ccc" },*/}
      {/*    headerTintColor: "white",*/}
      {/*    drawerActiveBackgroundColor: "#f0e1ff",*/}
      {/*    headerStyle: { backgroundColor: "#3a185b" },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Drawer.Screen*/}
      {/*    name="Welcome"*/}
      {/*    component={WelcomeScreen}*/}
      {/*    options={{*/}
      {/*      drawerLabel: "Welcome My gee!",*/}
      {/*      drawerIcon: ({ color, size }) => {*/}
      {/*        return <Ionicons name="home" color={color} size={size} />;*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Drawer.Screen*/}
      {/*    name="User"*/}
      {/*    component={UserScreen}*/}
      {/*    options={{*/}
      {/*      drawerLabel: "Daniel's Board",*/}
      {/*      drawerIcon: ({ color, size }) => {*/}
      {/*        return <Ionicons name="person" color={color} size={size} />;*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Drawer.Navigator>*/}
      <Tab.Navigator
        screenOptions={{
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#f0e1ff",
          headerStyle: { backgroundColor: "#3a185b" },
          tabBarActiveTintColor: "#3a185b",
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
