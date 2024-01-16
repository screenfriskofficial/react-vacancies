import { Flex, Typography } from "antd";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { memo } from "react";
import { VacancyDetailAddressTypes } from "../../../model/types/VacancyTypes.js";

const VacancyDetailAddress = memo(({ addresses, id, company }) => {
  return (
    <>
      {addresses.address.map((address) => (
        <Flex vertical key={id} gap={10}>
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
        </Flex>
      ))}
    </>
  );
});

VacancyDetailAddress.displayName = "VacancyDetailAddress";

VacancyDetailAddress.propTypes = VacancyDetailAddressTypes;

export { VacancyDetailAddress };
