import { useSelector } from "react-redux";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin, Modal } from "antd";
const antIcon = (
  <Loading3QuartersOutlined style={{ fontSize: 52, color: "#1976d2" }} spin />
);

const Loader = () => {
  const showSpinner = useSelector((state) => state.loader);
  console.log(showSpinner);

  return (
    <div>
      {showSpinner.showSpinner && (
        // <Modal
        //   open={true}
        //   closable={false}
        //   footer={false}
        //   centered={true}
        //   wrapClassName="loader"
        // >
          <Spin indicator={antIcon} size="large" />
        // </Modal>
      )}
    </div>
  );
};

export default Loader;
