import React, {useState} from "react";
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import {LoremIpsum, Avatar, loremIpsum} from 'react-lorem-ipsum';

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: '1', title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1})},
        {id: '2', title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1})},
        {id: '3', title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1})},
        {id: '4', title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1})},
        {id: '5', title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1})},
    ])

    const addTodo = (title) => {

        setTodos(prev => [
            ...prev, {
                id: Date.now().toString(),
                title: title
            }])
    }

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo.title}?"`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                }
            ],
            {cancelable: false},
        )
    }

    let content = (<MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={setTodoId}
        />
    )

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = (
            <TodoScreen
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
            />
        )
    }

    return (
        <View>
            <Navbar title="Todo App!" />
            <View style={styles.container}>
                { content }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});
