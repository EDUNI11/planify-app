import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, Alert, TextInput, Button, View} from 'react-native';
import "../global.css"
import {useState} from "react";
import {Link} from "expo-router";
import Logo from "./Logo";


/* INICIAR LA PÁGINA: npx expo start */

export default function Login() {
    const [campoNombre, nombre] = useState('');
    const [campoContra, contrasena] = useState('');

    const subirFormulario = () => {
        if (!campoNombre || !campoContra) {
            Alert.alert('Error', 'Por favor, completa ambos campos.');
        }else {
        }
    }
    return (
        <>
                <Logo size="w-40 h-40" color="#297169" />
                <StatusBar style="auto" />

                <Text className="mt-10">LOGIN</Text>

                <TextInput
                    className="min-w-60"
                    style={styles.input}
                    placeholder="Nombre"
                    value={campoNombre}
                    onChangeText={nombre}
                />

                <TextInput
                    className="min-w-60"
                    style={styles.input}
                    placeholder="Contraseña"
                    value={campoContra}
                    onChangeText={contrasena}
                />
                <Text className={"mb-10"}>No tienes cuenta? Registrate <Link href="/Register" style={styles.enlace}>aquí</Link></Text>
                <Button title="Enviar" onPress={subirFormulario}>
                </Button>

        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    enlace: {
        color: "#0000FF",
    },
});
