import React, { useState, useEffect } from 'react'
import { Divider, List, Typography, Input, Button, Row, Col } from 'antd';
import _ from 'lodash';
import axios from '../../config/axios';
import Todo from './Todo';

const { Text } =Typography;
export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState([]);

//default mock data source
    // useEffect(() => {
    //     setTodoList([
    //         {
    //             id: 1,
    //             task: "Do However",
    //         },
    //         {
    //             id: 2,
    //             task: "Do Whatever",
    //         },
    //     ]);
    // }, []);

//default
    // const addTodoItem =()=>{
    //     const newTodoList = [...todoList];
    //     newTodoList.push({
    //         id: _.uniqueId(),
    //         task: inputField,
    //     });
    //     setTodoList(newTodoList);
    //     setInputField('');
    // };
    
    // const deleteTodoItem = (id) => {
    //     const newTodoList = [...todoList];
    //     const targetIndex = newTodoList.findIndex(todo=>todo.id === id);
    //     newTodoList.splice(targetIndex, 1);
    //     setTodoList(newTodoList);
    // };

//connecting with back end data
    const fetchTodoList = async()=>{
        const httpResponse = await axios.get("/todo-list");
        setTodoList(httpResponse.data);
    };

    useEffect(() => {
        fetchTodoList();
    },[])

    const addTodoItem = async()=>{
        await axios.post("/todo-list",{task: inputField})
        fetchTodoList();
    };
    const deleteTodoItem = async(id)=>{
        await axios.delete(`todo-list/${id}`);
        fetchTodoList();
    };



    return (
        <Row justify='center'>
            <Col>
                <p>To Do LIST PAGE</p>
                <Row>
                    <Text type="warning">Add to do list at here</Text>
                </Row>
                <Row justify='center'>
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button type='primary' style={{width:'100%'}} onClick={addTodoItem}>ADD</Button>
                    </Col>
                </Row>
                <Divider/>
                <Row justify="center">
                    <List
                        style={{ width: '450px'}}
                        header={<div>TO_DO_LIST</div>}
                        //footer={<div>Footer</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={(todo) => (
                            <List.Item>
                                <Todo delete={deleteTodoItem} todo={todo} fetchTodoList={fetchTodoList}/>
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    )
}
