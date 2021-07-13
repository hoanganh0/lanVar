import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListProducts } from "../redux/actions/products";

const useGetAllProduct = () => {
  const dispatch = useDispatch();
  const dataProductStore = useSelector(state => state.listProduct.products);

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch])

  return dataProductStore;
}

export default useGetAllProduct;