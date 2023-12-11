// import { v1 } from "uuid"
// import { FilterValuesType, TodoListType } from "../App"
export {};
// export type RemoveTodolistActionType = {
//     type: 'REMOVE-TODOLIST'
//     id: string
// }

// export type AddTodolistActionType = {
//     type: 'ADD-TODOLIST'
//     title: string
//     todolistId: string
// }

// type ChangeTodolistTitleActionType = {
//     type: 'CHANGE-TODOLIST-TITLE'
//     id: string
//     title: string
// }

// type ChangeTodolistFilterActionType = {
//     type: 'CHANGE-TODOLIST-FILTER'
//     id: string
//     filter: FilterValuesType
// }

// type ActionsType = RemoveTodolistActionType | AddTodolistActionType |
//     ChangeTodolistTitleActionType | ChangeTodolistFilterActionType;


// export const todolistReducer = (state: Array<TodoListType>, action: ActionsType): Array<TodoListType> => {
//     switch (action.type) {
//         case 'REMOVE-TODOLIST': {
//             return state.filter(tl => tl.id !== action.id)
//         }
//         case 'ADD-TODOLIST': {
//             return [...state, {
//                 id: action.todolistId,
//                 title: action.title,
//                 filter: 'all'
//             }]
//         }
//         case 'CHANGE-TODOLIST-TITLE': {
//             const todolist = state.find(tl => tl.id === action.id);
//             if (todolist) {
//                 todolist.title = action.title;
//             }
//             return [...state]
//         }
//         case 'CHANGE-TODOLIST-FILTER': {
//             const todolist = state.find(tl => tl.id === action.id);
//             if (todolist) {
//                 todolist.filter = action.filter;
//             }
//             return [...state]
//         }
//         default:
//             return state;
//     }

// }

// export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
//     return { type: 'REMOVE-TODOLIST', id: todolistId }
// }

// export const addTodolistAC = (title: string): AddTodolistActionType => {
//     return { type: 'ADD-TODOLIST', title, todolistId: v1() }
// }

// export const changeTodolistAC = (id: string, title: string): ChangeTodolistTitleActionType => {
//     return { type: 'CHANGE-TODOLIST-TITLE', id, title }
// }

// export const filterTodolistAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
//     return { type: 'CHANGE-TODOLIST-FILTER', filter, id }
// }