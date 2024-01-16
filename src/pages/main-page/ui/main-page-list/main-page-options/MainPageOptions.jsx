import { Button, Input, Modal, Typography } from "antd";
import { memo, useState } from "react";
import { MainPageOptionsTypes } from "../../../model/types/MainPageTypes.js";

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

MainPageOptions.propTypes = MainPageOptionsTypes;

export { MainPageOptions };
