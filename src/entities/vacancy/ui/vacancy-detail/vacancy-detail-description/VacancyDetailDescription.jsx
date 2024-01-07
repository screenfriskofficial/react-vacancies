import { QRCode, Space, Typography } from "antd";
import dompurify from "dompurify";
import { memo } from "react";
import PropTypes from "prop-types";

const VacancyDetailDescription = memo(({ url, duty }) => {
  return (
    <Space>
      <Typography.Paragraph>
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(duty) }} />
      </Typography.Paragraph>
      <QRCode value={url || "-"} />
    </Space>
  );
});

VacancyDetailDescription.displayName = "VacancyDetailDescription";

VacancyDetailDescription.propTypes = {
  url: PropTypes.string,
  duty: PropTypes.string,
};

export { VacancyDetailDescription };
