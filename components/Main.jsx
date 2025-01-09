// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet, Text, Image, Alert, TextInput, Button} from 'react-native';
// import "../global.css"
// import icon from '../assets/logo-planify.png'
// import {useState} from "react";
// import Constants from "expo-constants";
// import {Link} from "expo-router";
//
//
// /* INICIAR LA PÁGINA: npx expo start */
//
// export function Main() {
//     const [campoNombre, nombre] = useState('');
//     const [campoContra, contrasena] = useState('');
//
//     const subirFormulario = () => {
//         if (!campoNombre || !campoContra) {
//             Alert.alert('Error', 'Por favor, completa ambos campos.');
//         }else {
//         }
//     }
//     return (
//                 <>
//                 <Image source={icon} style={styles.image}/>
//                 <StatusBar style="light" />
//
//                 <Text>LOGIN</Text>
//
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Nombre"
//                     value={campoNombre}
//                     onChangeText={nombre}
//                 />
//
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Contraseña"
//                     value={campoContra}
//                     onChangeText={contrasena}
//                 />
//                     <Text>No tienes cuenta? Registrate <Link href="../app/Register.js" style={styles.enlace}> aquí</Link></Text>
//                     <Button title="Enviar" onPress={subirFormulario}>
//                     </Button>
//                 </>
//     );
// }
//
// const styles = StyleSheet.create({
//     login: {
//         backgroundColor: "#DBF3EF" ,
//         paddingTop: Constants.statusBarHeight,
//         paddingBottom: Constants.statusBarHeight,
//         alignContent: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1
//     },
//     image: {
//         width: 100,
//         height: 100,
//         marginTop: -200,
//     },
//     tittle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginVertical: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 4,
//         paddingHorizontal: 8,
//         marginTop: 12,
//         marginBottom: 12,
//         backgroundColor: '#fff',
//     },
//     enlace: {
//         color: "#0000FF",
//     },
// });
