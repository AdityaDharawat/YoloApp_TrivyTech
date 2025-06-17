import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName =
            route.name === "HomeScreen"
              ? "home"
              : route.name === "YoloPayScreen"
              ? "card"
              : "sparkles";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingBottom: 8,
          height: 60,
        },
        headerShown: false,
      })}
    />
  );
}
