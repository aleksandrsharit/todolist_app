import React, { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './components/TodoList/TodoList';
import { v1 } from 'uuid';
import { AddItemForm } from './components/TodoList/AddItemForm';
import { AppBar, Container, Grid, IconButton, Menu, MenuItem, MenuList, MenuPaper, Paper, Toolbar, Typography } from '@mui/material';


// module.exports = {
//   testEnvironment: 'jsdom',
// };



export type FilterValuesType = 'all' | 'completed' | 'active';

export type TodoListType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

function App() {
  let todolistId1 = v1();
  let todolistId2 = v1();
  let [todolists, setTodolists] = useState<Array<TodoListType>>([
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ]);

  let [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: 'CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'REACT', isDone: false }
    ],
    [todolistId2]: [
      { id: v1(), title: 'Book', isDone: true },
      { id: v1(), title: 'Milk', isDone: true },
    ],
  });


  function removeTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let newFilterTasks = tasks.filter(t => t.id !== id);
    tasksObj[todolistId] = newFilterTasks;
    setTasks({ ...tasksObj });
  }

  function addTask(title: string, todolistId: string) {
    let task = { id: v1(), title: title, isDone: false };
    let tasks = tasksObj[todolistId];
    let newTasks = [task, ...tasks];
    tasksObj[todolistId] = newTasks
    setTasks({ ...tasksObj });
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasksObj });
    }
  }

  function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.title = newTitle;
      setTasks({ ...tasksObj });
    }
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  let removeTodoList = (todolistId: string) => {
    let filteredTodolist = todolists.filter(tl => tl.id !== todolistId);
    setTodolists(filteredTodolist);

    delete tasksObj[todolistId];
    setTasks({ ...tasksObj });
  }

  let changeTodolistTitle = (id: string, newTitle: string) => {
    const todolist = todolists.find(tl => tl.id === id);
    if (todolist) {
      todolist.title = newTitle;
      setTodolists([...todolists]);
    }
  }

  function addTodolist(title: string) {
    let todolist: TodoListType = {
      id: v1(),
      filter: 'all',
      title: title
    };
    setTodolists([todolist, ...todolists]);
    setTasks({ ...tasksObj, [todolist.id]: [] })
  }


  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label='menu'>
            <MenuItem />
            <Typography variant='h6'>
              News
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: '15px' }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {
            todolists.map((tl) => {
              let tasksForTodoList = tasksObj[tl.id];
              if (tl.filter === 'completed') {
                tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
              }
              if (tl.filter === 'active') {
                tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false);
              }
              return <Grid item>
                <Paper style={{ padding: '10px' }}>
                  <TodoList
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodoList}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    changeTaskTitle={changeTaskTitle}
                    filter={tl.filter}
                    removeTodoList={removeTodoList}
                    changeTodolistTitle={changeTodolistTitle}
                  />
                </Paper>
              </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  );
}


export default App;
