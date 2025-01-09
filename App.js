import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import "./global.css"
import Constants from 'expo-constants';
import {SafeAreaProvider} from "react-native-safe-area-context";


/* INICIAR LA PÁGINA: npx expo start */

export default function App() {

    return (
        <SafeAreaProvider>
            <View  style={styles.login}>
                <StatusBar style="light" />
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
   login: {
       backgroundColor: "#DBF3EF" ,
       paddingTop: Constants.statusBarHeight,
       paddingBottom: Constants.statusBarHeight,
       alignContent: 'center',
       justifyContent: 'center',
       alignItems: 'center',
       flex: 1
   },
});
