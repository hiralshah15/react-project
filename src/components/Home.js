import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Table from "@mui/joy/Table";
import { getProducts } from "../redux/actions/product";
import { useNavigate } from "react-router-dom";
import { toggleLoader } from "../redux/actions/loader";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(state=>state.product.products);
  const isLoading = useSelector(state=>state.loader.showSpinner)

  useEffect(() => {
    (async ()=>{
      dispatch(toggleLoader(true));
      await Promise.all([
        dispatch(getProducts()),
        dispatch(getProducts()),
        dispatch(getProducts()),
        dispatch(getProducts()),
        dispatch(getProducts()),
      ]);
      dispatch(toggleLoader(false));
    })()
  }, []);

  const handleView = (id) => {
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
          {data &&!isLoading&&
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
