import React, {useState, useContext} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext);
    const {todoId, changeScreen} = useContext(ScreenContext);
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={() => changeScreen(null)} color={THEME.GREY_COLOR}>
                        <AntDesign name='back' size={20} color='#fff'/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => removeTodo(todo.id)} color={THEME.DANGER_COLOR}>
                        <FontAwesome name='remove' size={20}/>
                    </AppButton>

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
        width: Dimensions.get('window').width * 0.35
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})