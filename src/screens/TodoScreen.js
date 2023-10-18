import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove }) => {
    const [modal, setModal] = useState(false)

    return (
        <View>
            <EditModal visible={modal} onCancel={() => setModal(false)} />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Редактировать' onPress={() => setModal(true)} />
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Удалить"
                        onPress={() => onRemove(todo.id)}
                        color={THEME.DANGER_COLOR}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})