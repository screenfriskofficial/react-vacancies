import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { memo, useEffect, useState } from "react";
import { LoginFormTypes } from "../model/types/LoginFormTypes.js";

const LoginForm = memo(({ login, loading, setIsAuthOpen }) => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = async (values) => {
    const { email, password } = values;
    await login(email, password);
    setIsAuthOpen(false);
  };

  return (
    <Form name={"login"} form={form} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Не верный формат!",
          },
          {
            required: true,
            message: "Введите почту!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder={"Почта"} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Введите пароль!",
          },
          {
            min: 6,
            message: "Минимум 6 сивмолов!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder={"Пароль"} />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            loading={loading}
            htmlType={"submit"}
            type={"primary"}
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Войти
          </Button>
        )}
      </Form.Item>
    </Form>
  );
});

LoginForm.displayName = "LoginForm";

LoginForm.propTypes = LoginFormTypes;

export { LoginForm };
