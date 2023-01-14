import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    StatusBar
} from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export default function Home() {

    const participants = ['Daniel', 'Neide', 'Ieda', 'mai', 'andre', 'bocó', 'kuneroko', 'luiz inacio', 'monica']

    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar !")
    }

    function handleParticipantRemove(name: string) {

        console.log(`Você resolveu remover o participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}
            > Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Quinta-feira, 12 de Janeiro de 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove('Daniel')} />

                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
                    </Text>
                )}

            />



        </View>
    )
}
