import { QRCode, Typography } from "antd";
import dompurify from "dompurify";
import { memo } from "react";
import PropTypes from "prop-types";

const VacancyDetailDescription = memo(({ url, duty }) => {
  return (
    <div>
      <Typography.Paragraph>
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(duty) }} />
      </Typography.Paragraph>
      <QRCode value={url || "-"} />
    </div>
  );
});

VacancyDetailDescription.displayName = "VacancyDetailDescription";

VacancyDetailDescription.propTypes = {
  url: PropTypes.string,
  duty: PropTypes.string,
};

export { VacancyDetailDescription };
