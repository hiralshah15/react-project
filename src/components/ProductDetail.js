import { useEffect, useState } from "react";
import { SHOW_LOADER } from "../redux/constants/const";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { getProductById } from "../redux/actions/product";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    dispatch(getProductById(params.id)).then((res) => {
      console.log("tretetert", res);
      setData(res);
    });
  }, [params.id]);

  return (
    <div>
      <div className="button-back">
        <Button onClick={() => navigate("/")} variant="contained">
          Back to product page
        </Button>
        <h1 style={{ marginLeft: "10px"}}>Product Details Page</h1>
      </div>

      <Card className="card-product">
        <CardContent>
          <div className="details">
            <Typography>Title</Typography>
            <Typography>{data.title}</Typography>
          </div>
          <div className="details">
            <Typography>Price</Typography>
            <Typography>{data.price}</Typography>
          </div>
          <div className="details">
            <Typography>Rating</Typography>
            <Typography>{data.rating}</Typography>
          </div>

          <div className="details">
            <Typography>Category</Typography>
            <Typography>{data.category}</Typography>
          </div>
          <div className="details">
            <Typography>Stock</Typography>
            <Typography>{data.stock}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
