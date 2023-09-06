import { StyleSheet } from 'react-native';
import {Video, ResizeMode} from "expo-av"
import { useState } from 'react';
import {hideAsync} from 'expo-splash-screen'



export function Splash({onComplete}) {

  const [lastStatus, setStatus] = useState({})

  function onPlaybackStatusUpdate(status){
    if(status.isLoaded){
      if(lastStatus.isLoaded !== status.isLoaded){
        hideAsync(); 
      }

      if(status.didJustFinish){
        onComplete(true)
      }
    }
    setStatus(status)
  }
  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("./../assets/splash.mp4")}
      isLooping={false}
      shouldPlay={true}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
}

