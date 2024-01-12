import { Button, Input, Modal, Typography } from "antd";
import { memo, useState } from "react";
import PropTypes from "prop-types";

const MainPageOptions = memo(({ optionsRef, onChangeRegion, region }) => {
  const [open, setOpen] = useState(false);

  const onOk = () => {
    setOpen(false);
  };
  const onCancel = () => {
    setOpen(false);
  };

  const onShowModal = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        ref={optionsRef}
        onClick={onShowModal}
        type={"primary"}
        size={"large"}
      >
        Настройка поиска
      </Button>
      <Modal onOk={onOk} onCancel={onCancel} open={open} footer={false}>
        <Typography.Title
          level={5}
        >{`Укажите регион (по умолчанию ${region})`}</Typography.Title>
        <Input defaultValue={region} value={region} onChange={onChangeRegion} />
      </Modal>
    </>
  );
});

MainPageOptions.displayName = "MainPageOptions";

MainPageOptions.propTypes = {
  onChangeRegion: PropTypes.func,
  region: PropTypes.string,
  optionsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export { MainPageOptions };
