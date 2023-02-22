import { useSelector } from "react-redux";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <Loading3QuartersOutlined style={{ fontSize: 52, color: "#1976d2" }} spin />
);

const Loader = () => {
  const showSpinner = useSelector((state) => state.loader);
  console.log(showSpinner);

  return (
    <div>
      {showSpinner.showSpinner && (
          <Spin indicator={antIcon} size="large" />
      )}
    </div>
  );
};

export default Loader;
