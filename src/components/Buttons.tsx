import { StyleSheet, TouchableOpacity, Text } from 'react-native'

type ButtonsProps = {
    nameButton: string;
}

export default function Buttons({nameButton}: {nameButton: string}) {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>{nameButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

  botao: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    texto: {
        color: 'white',
    },

})
