import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
// import { FavoritesContextProvider } from "./store/context/FavoritesContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

// Initailizing the stack and drawer navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// This can be imported as a separate component
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#13131E" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#222a3b" },
        drawerContentStyle: { backgroundColor: "#222a3b" },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#b3c0f5",
        drawerActiveTintColor: "#222a3b",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#13131E" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#222a3b" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({});
