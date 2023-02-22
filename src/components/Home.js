import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Table from "@mui/joy/Table";
import { getProducts } from "../redux/actions/product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts()).then((res) => {
      setData(res.products);
    });
  }, []);

  const handleView = (id) => {
    console.log(data);
    navigate(`product/${id}`);
  };
  return (
    <>
      <div className="product-list">Product List Page</div>
      <Table className="product-table" aria-label="basic table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button
                      onClick={() => handleView(item.id)}
                      variant="contained"
                      className="view-detail"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
