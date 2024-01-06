import { Typography } from "antd";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { memo } from "react";
import PropTypes from "prop-types";

const VacancyDetailAddress = memo(({ addresses, id }) => {
  return (
    <>
      <Typography.Title level={5}>Адрес</Typography.Title>
      {addresses.address.map((address) => (
        <>
          <Typography.Text key={id}>{address.location}</Typography.Text>
          <YMaps>
            <Map
              height={"150px"}
              width={"100%"}
              defaultState={{ center: [address.lat, address.lng], zoom: 17 }}
            />
          </YMaps>
        </>
      ))}
    </>
  );
});

VacancyDetailAddress.displayName = "VacancyDetailAddress";

VacancyDetailAddress.propTypes = {
  addresses: PropTypes.object,
  id: PropTypes.string,
};

export { VacancyDetailAddress };
