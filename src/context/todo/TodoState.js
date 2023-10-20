import React, {useReducer} from "react";
import {TodoContext} from './todoContext'
import {todoReducer} from "./todoReducer";
import {loremIpsum} from "react-lorem-ipsum";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [
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
        ]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({type: ADD_TODO, title: title})

    const removeTodo = id => dispatch({type: REMOVE_TODO, id})

    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos, addTodo, removeTodo, updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>)
}