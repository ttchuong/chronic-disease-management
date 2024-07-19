"use client";

import { CredType, login } from "@/api/auth";
import { Button, Checkbox, Form, Input } from "antd";
import { FormProps } from "antd/lib";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { data } = await login(values);
    dispatch(
      setIsAuthenticated({
        authenticated: true,
        token: data.jwttoken,
        username: values.username, // Extract username from form values
      }),
    );
    router.replace("/");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image
              src={"/images/cover/login-left.jpg"}
              alt="login bg"
              width={970}
              height={260}
              className="object-cover w-full h-full"/>
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-8">Login</h1>
        <Form
            name="basic"
            labelCol={{span: 6}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            colon={false}
        >
          <Form.Item
              label={<p className="block text-gray-600">Username</p>}
                name="username"
              rules={[{required: true, message: "Please input your username!"}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label={<p className="block text-gray-600">Password</p>}
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
          >
            <Input.Password/>
          </Form.Item>

           <Form.Item label="Remember me" name="remember_me" valuePropName="checked" >
                    <Checkbox></Checkbox>
            </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
  );
}

export default Login;
