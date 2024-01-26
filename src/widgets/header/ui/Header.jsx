import { Button, Flex, Layout, Modal, Tabs } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { memo, useCallback, useState } from "react";
import { LoginForm } from "~features/login-form/index.js";
import { RegisterForm } from "~features/register-form/index.js";
import { useAuth } from "~shared/hooks/useAuth.js";
import { useProfile } from "~shared/hooks/useProfile.js";
import PropTypes from "prop-types";
import { UserProfile } from "~entities/user-profile/index.js";

const Header = memo(({ bgColor, borderLG }) => {
  const { Header } = Layout;
  const { loginWithEmailAndPassword, registerWithEmailAndPassword, isLoading } =
    useAuth();
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

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const tabItems = [
    {
      key: "login",
      label: "Войти",
      children: (
        <LoginForm
          login={loginWithEmailAndPassword}
          setIsAuthOpen={setIsAuthOpen}
          loading={isLoading}
        />
      ),
    },
    {
      key: "register",
      label: "Регистрация",
      children: (
        <RegisterForm
          register={registerWithEmailAndPassword}
          setIsAuthOpen={setIsAuthOpen}
          loading={isLoading}
        />
      ),
    },
  ];

  const showAuthModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const handleAuthClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  if (currentUser) {
    return (
      <UserProfile
        headerStyle={headerStyle}
        isLoadingProfile={isLoadingProfile}
        currentUser={currentUser}
      />
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

Header.displayName = "Header";

Header.propTypes = {
  bgColor: PropTypes.string,
  borderLG: PropTypes.number,
};

export { Header };
