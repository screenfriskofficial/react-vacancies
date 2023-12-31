import { Avatar, Button, Flex, Layout, Modal, Spin, Tabs, Tooltip } from "antd";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { memo, useState } from "react";
import { LoginForm } from "~features/login-form/index.js";
import { RegisterForm } from "~features/register-form/index.js";
import cls from "./Header.module.css";
import { useAuth } from "~shared/hooks/useAuth.js";
import { useProfile } from "~shared/hooks/useProfile.js";

export const Header = memo(({ bgColor, borderLG }) => {
  const { Header } = Layout;
  const {
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    isLoading,
  } = useAuth();
  const { currentUser, isLoadingProfile } = useProfile();
  const headerStyle = {
    height: 48,
    backgroundColor: bgColor,
    display: "flex",
    alignItems: "center",
    borderRadius: borderLG,
    justifyContent: "space-between",
    gap: 10,
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const tabItems = [
    {
      key: "login",
      label: "Войти",
      children: (
        <LoginForm login={loginWithEmailAndPassword} loading={isLoading} />
      ),
    },
    {
      key: "register",
      label: "Регистрация",
      children: (
        <RegisterForm
          register={registerWithEmailAndPassword}
          loading={isLoading}
        />
      ),
    },
  ];

  const showProfileModal = () => {
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const showAuthModal = () => {
    setIsAuthOpen(true);
  };

  const handleAuthClose = () => {
    setIsAuthOpen(false);
  };

  if (currentUser) {
    return (
      <>
        <Header style={headerStyle}>
          {isLoadingProfile ? (
            <Spin />
          ) : (
            <Flex align={"center"} gap={10}>
              <Tooltip title={"Профиль"}>
                <Avatar
                  onClick={showProfileModal}
                  style={{ cursor: "pointer" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>

              <span className={cls.username}>{currentUser.email}</span>
            </Flex>
          )}

          <Flex align={"center"}>
            <Button
              onClick={logout}
              type={"primary"}
              danger
              icon={<LogoutOutlined />}
            >
              Выйти
            </Button>
          </Flex>
        </Header>
        <Modal
          open={isProfileOpen}
          onCancel={handleProfileClose}
          footer={false}
        />
      </>
    );
  }

  return (
    <>
      <Header style={headerStyle}>
        <Flex align={"center"} justify={"end"} style={{ width: "100%" }}>
          <Button
            onClick={showAuthModal}
            type={"primary"}
            icon={<LoginOutlined />}
          >
            Войти
          </Button>
        </Flex>
      </Header>
      <Modal open={isAuthOpen} onCancel={handleAuthClose} footer={false}>
        <Tabs defaultActiveKey={"login"} centered items={tabItems} />
      </Modal>
    </>
  );
});
