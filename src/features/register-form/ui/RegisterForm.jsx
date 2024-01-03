import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

const RegisterForm = memo(({ register, loading }) => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    const { email, password } = values;
    register(email, password);
  };

  return (
    <Form name={"register"} form={form} onFinish={onFinish}>
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
            Регистрация
          </Button>
        )}
      </Form.Item>
    </Form>
  );
});

RegisterForm.displayName = "RegisterForm";

RegisterForm.propTypes = {
  register: PropTypes.func,
  loading: PropTypes.bool,
};

export { RegisterForm };
