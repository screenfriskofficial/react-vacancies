import { Avatar, Button, Flex, Layout, Modal, Tabs, Tooltip } from "antd";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { memo, useState } from "react";
import { LoginForm } from "~features/login-form/index.js";
import { RegisterForm } from "~features/register-form/index.js";
import cls from "./Header.module.css";

const tabItems = [
  {
    key: "login",
    label: "Войти",
    children: <LoginForm />,
  },
  {
    key: "register",
    label: "Регистрация",
    children: <RegisterForm />,
  },
];

export const Header = memo(({ bgColor, borderLG }) => {
  const { Header } = Layout;
  const headerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
    justifyContent: "space-between",
    gap: 10,
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const showLoginModal = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const isAuth = false;

  if (isAuth) {
    return (
      <>
        <Header style={headerStyle}>
          <Flex align={"center"} justify={"end"} style={{ width: "100%" }}>
            <Button
              onClick={showLoginModal}
              type={"primary"}
              icon={<LoginOutlined />}
            >
              Войти
            </Button>
          </Flex>
        </Header>
        <Modal open={isLoginOpen} onCancel={handleLoginClose} footer={false}>
          <Tabs defaultActiveKey={"login"} centered items={tabItems} />
        </Modal>
      </>
    );
  }

  return (
    <>
      <Header style={headerStyle}>
        <Flex align={"center"} gap={10}>
          <Tooltip title={"Профиль"}>
            <Avatar
              onClick={showModal}
              style={{ cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <span className={cls.username}>Username</span>
        </Flex>
        <Flex align={"center"}>
          <Button type={"primary"} danger icon={<LogoutOutlined />}>
            Выйти
          </Button>
        </Flex>
      </Header>
      <Modal open={isOpen} onCancel={handleClose} footer={false} />
    </>
  );
});
