import { useSelector } from "react-redux";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";
const antIcon = (
  <Loading3QuartersOutlined style={{ fontSize: 52, color: "#1976d2" }} spin />
);

export const Loader = (WrappedComponent) => {
  // const showSpinner = useSelector((state) => state.loader.showSpinner);
  function HOC(props) {
    const [loading, setLoading] = useState(false);
    const toogleLoading = isComponentLoading => {
      setLoading(isComponentLoading);
    };
    return (
      <div>
        {loading && <Spin indicator={antIcon} size="large" />}
        <WrappedComponent {...props} toogleLoading={toogleLoading} />
      </div>
    );
  }
  return HOC;
};

export default Loader;
