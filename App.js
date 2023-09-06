import { useState } from "react";
import {Splash} from "./screens/Splash"
import { StatusBar } from 'expo-status-bar';
import { preventAutoHideAsync } from 'expo-splash-screen';
import {NavigationContainer} from "@react-navigation/native"
import Routes from "./routes"

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
    <StatusBar style="light" />

    <NavigationContainer>
      {splashComplete ? <Routes /> : <Splash onComplete={setSplashComplete}/>}
    </NavigationContainer>
    </>
  );
}
