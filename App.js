import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Задача 1'},
        {id: 2, title: 'Задача 2'},
        {id: 3, title: 'Задача 3'},
        {id: 4, title: 'Задача 4'},
        {id: 5, title: 'Задача 5'},
        {id: 6, title: 'Задача 6'},
        {id: 7, title: 'Задача 7'},
        {id: 8, title: 'Задача 8'},
        {id: 9, title: 'Задача 9'},
        {id: 10, title: 'Задача 10'},
        {id: 11, title: 'Задача 11'},
        {id: 12, title: 'Задача 12'},
        {id: 13, title: 'Задача 13'},
        {id: 14, title: 'Задача 14'},
        {id: 15, title: 'Задача 15'},
    ])

    const addTodo = (title) => {

        setTodos(prev => [
            ...prev, {
                id: Date.now().toString(),
                title: title
            }])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View>
            <Navbar title="Todo App!" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} />)}
                />
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
