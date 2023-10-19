import React, { useReducer } from "react";
import {TodoContext} from './todoContext'
import {todoReducer} from "./todoReducer";
import {loremIpsum} from "react-lorem-ipsum";

export const TodoState = ({ children }) => {
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

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos
            }}
        >
            { children }
        </TodoContext.Provider>)
}