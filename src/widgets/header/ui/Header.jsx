import { Avatar, Button, Flex, Layout, Modal, Tooltip } from "antd";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { memo, useState } from "react";

export const Header = memo(({ bgColor, borderLG }) => {
  const { Header } = Layout;
  const headerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
    justifyContent: "space-between",
  };

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isAuth = false;

  if (isAuth) {
    return (
      <Header style={headerStyle}>
        <Flex align={"center"}>
          <Button type={"primary"} icon={<LoginOutlined />}>
            Войти
          </Button>
        </Flex>
      </Header>
    );
  }

  return (
    <>
      <Header style={headerStyle}>
        <Flex align={"center"}>
          <Button type={"primary"} danger icon={<LogoutOutlined />}>
            Выйти
          </Button>
        </Flex>

        <Flex align={"center"} gap={10}>
          <Tooltip title={"Профиль"}>
            <Avatar
              onClick={showModal}
              style={{ cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <span>Username</span>
        </Flex>
      </Header>
      <Modal open={isOpen} onCancel={handleClose} footer={false} />
    </>
  );
});
