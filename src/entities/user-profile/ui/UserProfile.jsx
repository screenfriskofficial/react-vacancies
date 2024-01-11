import { memo, useCallback, useState } from "react";
import { Avatar, Button, Flex, Layout, Modal, Spin, Tooltip } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "~shared/hooks/useAuth.js";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const UserProfile = memo(({ headerStyle, isLoadingProfile, currentUser }) => {
  const { Header } = Layout;

  const { logout } = useAuth();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const showProfileModal = useCallback(() => {
    setIsProfileOpen(true);
  }, []);

  const handleProfileClose = useCallback(() => {
    setIsProfileOpen(false);
  }, []);

  const date = dayjs(currentUser?.metadata?.creationTime);
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

            <span>{currentUser.displayName}</span>
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
        title={currentUser.displayName}
        open={isProfileOpen}
        onCancel={handleProfileClose}
        footer={false}
      >
        <p>{currentUser.email}</p>
        <p>Дата создания: {date.format("DD/MM/YYYY")}</p>
      </Modal>
    </>
  );
});

UserProfile.displayName = "UserProfile";

UserProfile.propTypes = {
  headerStyle: PropTypes.object,
  isLoadingProfile: PropTypes.bool,
  currentUser: PropTypes.object,
};

export { UserProfile };
