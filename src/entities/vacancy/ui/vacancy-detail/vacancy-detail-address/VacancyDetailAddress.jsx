import { Typography } from "antd";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { memo } from "react";
import PropTypes from "prop-types";

const VacancyDetailAddress = memo(({ addresses, id, company }) => {
  return (
    <>
      <Typography.Title level={5}>Адрес</Typography.Title>
      {addresses.address.map((address) => (
        <div key={id}>
          <Typography.Text>{address.location}</Typography.Text>
          <YMaps query={{ apikey: import.meta.env.VITE_YA_MAP_API }}>
            <Map
              height={"150px"}
              width={"100%"}
              defaultState={{
                center: [address.lat, address.lng],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              <Placemark
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={[address.lat, address.lng]}
                properties={{
                  balloonContentBody: company.name,
                }}
              />
            </Map>
          </YMaps>
        </div>
      ))}
    </>
  );
});

VacancyDetailAddress.displayName = "VacancyDetailAddress";

VacancyDetailAddress.propTypes = {
  addresses: PropTypes.object,
  company: PropTypes.object,
  id: PropTypes.string,
};

export { VacancyDetailAddress };
