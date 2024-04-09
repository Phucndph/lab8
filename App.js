import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App54 from './L54/App54';
import AppDemo5 from './Demo5/AppDemo5';
import AppDemo51 from './Demo51/AppDemo51';
import App61 from './Demo6/App61';
import AppTutor from './Tutor/AppTutor';
import App71 from './L7/insertFB';
import App72 from './L7/CRUDApp72';

export default function App() {
  return (
    <App72/>
    // <AppTutor/>
    // <App61/>
    // <AppDemo51/>
    // <AppDemo5/>
     //<App54/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
