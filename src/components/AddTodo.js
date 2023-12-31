import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert, Keyboard} from 'react-native';
import {THEME} from "../theme";
import {AntDesign} from '@expo/vector-icons';
import {AppButton} from "./ui/AppButton";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')


    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым ')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize='sentences'
            />

            <AppButton onPress={pressHandler} color={THEME.MAIN_COLOR} >
                <AntDesign name='pluscircleo' size={20} color='#fff' />  Добавить
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '65%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})