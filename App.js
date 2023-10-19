import React, {useState} from "react";
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import {loremIpsum} from 'react-lorem-ipsum';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false)
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {
            id: '1',
            title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1}).toString()
        },
        {
            id: '2',
            title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1}).toString()
        },
        {
            id: '3',
            title: loremIpsum({random: true, startWithLoremIpsum: false, avgSentencesPerParagraph: 1}).toString()
        }
    ])

    if (!isReady) {

        return (<AppLoading
                startAsync={loadApplication}
                onError={err => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }


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

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
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
                onSave={updateTodo}
            />
        )
    }

    return (
        <View>
            <Navbar title="DexterMed" />
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
