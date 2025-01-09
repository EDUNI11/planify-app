import {Text, Alert, Button, TextInput, StyleSheet} from 'react-native';
import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Link} from "expo-router";
import Logo from "./Logo";

export default function Register() {
    const [campoNombre, nombre] = useState('');
    const [campoContra, contrasena] = useState('');

    const subirFormulario = () => {
        if (!campoNombre || !campoContra) {
            Alert.alert('Error', 'Por favor, completa ambos campos.');
        }
    }
    return (
        <>
            <Logo size="w-40 h-40" color="#297169" />
            <StatusBar style="auto" />

            <Text className="mt-10">REGISTRO</Text>

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
            <Text className={"mb-10"}>Ya tienes una cuenta? Inicia sesión <Link href="/" style={styles.enlace}>aquí</Link></Text>
            <Button title="Enviar" onPress={subirFormulario}>
            </Button>
        </>

    );
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginTop: -200,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginTop: 12,
        marginBottom: 12,
    },
    enlace: {
        color: "#0000FF",
    },
    texto:{
        marginBottom: 20
    },
});