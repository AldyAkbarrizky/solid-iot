"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [form2] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onSubmit = (values: any) => {
    console.log("Finish: ", values);
  };

  return (
    <Form form={form2} name="horizontal_login" onFinish={onSubmit}>
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
      <Form.Item
        name="confirm_password"
        rules={[
          { required: true, message: "Please input again your password!" },
        ]}
      >
        <Input
          className="rounded-none h-10"
          prefix={<LockOutlined className="text-[#1890FF] mr-2" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item name="agree" valuePropName="checked">
        <Checkbox>Agree to Terms & Condition</Checkbox>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            className="rounded-none px-8"
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form2.isFieldsTouched(true) ||
              !!form2.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Register
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
