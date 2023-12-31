import { Component, Suspense } from "react";
import { Flex, Spin } from "antd";

export const Loadable = (Component) => {
  return function (...props) {
    return (
      <Suspense
        fallback={
          <Flex justify={"center"}>
            <Spin />
          </Flex>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
};
