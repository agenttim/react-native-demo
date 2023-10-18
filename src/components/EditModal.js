import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import {THEME} from "../theme";

export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка!', `Минимальная длинна названия 3 символа. Сейчас ${
                title.trim().length
            } символов`
            )
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='Введите название'
                    autoCapitalize={"sentences"}
                    autoCorrect={false}
                    maxLength={1000}
                />
                <View style={styles.buttons}>
                    <Button
                        title='Отменить'
                        onPress={onCancel}
                        color={THEME.GREY_COLOR}
                    />
                    <Button title='Сохранить' onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})