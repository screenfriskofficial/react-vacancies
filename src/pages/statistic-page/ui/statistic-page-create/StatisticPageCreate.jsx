import { Button } from "antd";
import { useState } from "react";
import { StatisticPageModal } from "../../ui/statistic-page-create/statistic-page-modal/StatisticPageModal.jsx";

const StatisticPageCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onShowModal = () => {
    setIsOpen(true);
  };

  const handleOnOk = () => {
    setIsOpen(false);
  };
  const handleOnCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={onShowModal}>Создать график</Button>
      <StatisticPageModal
        isOpen={isOpen}
        handleOnOk={handleOnOk}
        handleOnCancel={handleOnCancel}
      />
    </>
  );
};

export { StatisticPageCreate };
