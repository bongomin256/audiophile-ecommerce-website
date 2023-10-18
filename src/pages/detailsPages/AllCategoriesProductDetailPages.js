import { useNavigate } from "react-router-dom";
import CategoryLayout from "../../components/Shared/Layouts/CategoryLayout";
import data from "../../data.json";
import ProductCategoryPreview from "./ProductCategoryPreview";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const AllCategoriesProductDetailPages = ({ productId, cart, setCart }) => {
  const navigate = useNavigate();

  const productDetail = data.find(({ id }) => id === productId);

  const [quantityCount, setQuantityCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);

  // const { cartItem, addProductToCart } = useContext(CartContext);

  // console.log(cartItem);

  // const handleAddToCart = (productDetail) => {
  //   let PresentInCart = false;
  //   cartItem.forEach((product) => {
  //     if (productDetail.id === product.id) PresentInCart = true;
  //   });
  //   if (PresentInCart) {
  //     setAlertMessage(true);
  //     setTimeout(() => {
  //       setAlertMessage(false);
  //     }, 2000);
  //   }

  //   return addProductToCart(productDetail);
  // };

  const addProductToCart = (productDetail) => {
    let PresentInCart = false;
    cart.forEach((product) => {
      if (productDetail.id === product.id) PresentInCart = true;
    });
    if (PresentInCart) {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 2000);
    }
    const newProduct = { ...productDetail, quantityCount };
    console.log(quantityCount);
    setCart([...cart, newProduct]);
    console.log(cart);
    console.log(cart.length);
    // console.log(productDetail);
  };

  return (
    <CategoryLayout cart={cart}>
      <section className="px-8 md:px-16 lg:px-40 top-50 mb-[10rem]">
        <p className="py-5 ">
          <button className="capitalize" onClick={() => navigate(-1)}>
            go back
          </button>
        </p>

        <ProductCategoryPreview
          addProductToCart={addProductToCart}
          quantityCount={quantityCount}
          setQuantityCount={setQuantityCount}
          productDetail={productDetail}
          alertMessage={alertMessage}
          // handleAddToCart={handleAddToCart}
        />
      </section>
    </CategoryLayout>
  );
};

export default AllCategoriesProductDetailPages;
