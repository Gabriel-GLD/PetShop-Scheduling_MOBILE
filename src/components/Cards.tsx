import { StyleSheet, View, Text, Image } from 'react-native'
import Buttons from './Buttons'


type ButtonsProps = {
    nameButton: string;
}


export default function Cards() {
    return (

        <View >

            <View style={styles.card}>
                {/* <Image source={require('../assets/images/')}/> */}
                <Text>Manhã</Text>


                {/* Local onde vai ficar Os conteudos*/}
                <View>
                    <Text></Text>
                    <Buttons nameButton="Teste1" />
                </View>
            </View>

            <View style={styles.card}>
                {/* <Image source={require('../assets/images/')}/> */}
                <Text>Tarde</Text>

                <View>
                    <Text></Text>
                    <Buttons nameButton="TesteButton"/>
                </View>
            </View>

            <View style={styles.card}>
                {/* <Image source={require('../assets/images/')}/> */}
                <Text>Noite</Text>

                <View>
                    <Text></Text>
                    <Buttons nameButton="Teste3" />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
         gap: 20,
    },

    card: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        gap: 20,
        height: 100,
        width: 300,
        
    }

})