"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    redirect("/dashboard");
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          className="rounded-none h-10"
          prefix={<UserOutlined className="text-[#1890FF] mr-2" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          className="rounded-none h-10"
          prefix={<LockOutlined className="text-[#1890FF] mr-2" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div className="flex items-center justify-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </div>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Link href="/dashboard">
            <Button
              className="rounded-none px-8"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Link>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
