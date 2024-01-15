import { Modal } from "antd";
import PropTypes from "prop-types";
import { StatisticPageList } from "~pages/statistic-page/ui/statistic-page-create/statistic-page-list/StatisticPageList.jsx";

const StatisticPageModal = ({ handleOnCancel, handleOnOk, isOpen }) => {
  return (
    <Modal
      title={"Создание графика"}
      footer={false}
      onOk={handleOnOk}
      onCancel={handleOnCancel}
      open={isOpen}
    >
      <StatisticPageList />
    </Modal>
  );
};

StatisticPageModal.propTypes = {
  handleOnCancel: PropTypes.func,
  handleOnOk: PropTypes.func,
  isOpen: PropTypes.bool,
};

export { StatisticPageModal };
