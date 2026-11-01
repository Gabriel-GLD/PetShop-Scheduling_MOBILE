import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout'

export default function Index() {
    return (
        <View style={styles.container}>

            <Layout />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {

    }
})