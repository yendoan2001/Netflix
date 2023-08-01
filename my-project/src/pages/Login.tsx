import {Button, Checkbox, Form, Input} from 'antd';
import {useLoginMutation} from "../services/apiAuthService.ts";
import {useEffect, useState} from "react";


const Login = () => {
    const [user, setUser] = useState({})

    const [login, {data: userData}] = useLoginMutation()
    const onFinish = async (values: any) => {
        await login(values)
        setUser(userData)
    };
    useEffect(() => {
        console.log(user)
    })

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;