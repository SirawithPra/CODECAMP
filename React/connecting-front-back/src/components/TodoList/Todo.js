import React, {useState} from 'react'
import { Button, Row, Col, Input } from 'antd';
import axios from '../../config/axios';

export default function Todo(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit,setIsEdit] = useState(false);

    const updateTodoItem = async(id)=>{
        await axios.put(`/todo-list/${id}`,{task: changeInput});
        props.fetchTodoList();
        setIsEdit(false);
    };
    const toggleEdit =()=>{
        setIsEdit(true);
        setChangeInput(props.todo.task);

    };
    let content = (
            <Row style={{width:"100%"}}>
                <Col span={20}>
                    <Input value={changeInput} onChange={(e)=> setChangeInput(e.target.value)}/>
                </Col>
                <Col span={4}>
                    <Button type='primary' onClick={() => updateTodoItem(props.todo.id)}>Done</Button>
                </Col>
            </Row>
    );
    if(!isEdit){
        content =(
            <Row style={{ width: "100%" }}>
                <Col span={16}>
                    <Row justify="start">
                        {props.todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button type='primary' style={{backgroundColor:"orange"}} onClick={() => toggleEdit()}>Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type='primary' danger onClick={() => props.delete(props.todo.id)}>Delete</Button>
                </Col>
            </Row>
        );
    }

    return (
        <div style={{width:"100%"}}>
            {content}
        </div>
    )
}
