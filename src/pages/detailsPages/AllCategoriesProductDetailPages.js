import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryLayout from "../../components/Shared/Layouts/CategoryLayout";
import data from "../../data.json";
import ProductCategoryPreview from "./ProductCategoryPreview";
import { CartContext } from "../../context/CartContext";

const AllCategoriesProductDetailPages = ({ productId, cart, setCart }) => {
  const navigate = useNavigate();

  // Getting the Product detail to display by their id
  const productDetail = data.find(({ id }) => id === productId);

  // setting the qty
  const [quantityCount, setQuantityCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);

  // useEffect(() => {
  //   const savedInCart = JSON.parse(localStorage.getItem("cartArrays"));
  //   setCart(savedInCart);
  // }, []);

  const addProductToCart = (productDetail) => {
    let PresentInCart = false;

    //checking if product is already in cart
    cart.forEach((product) => {
      if (productDetail.id === product.id) {
        PresentInCart = true;
        return {
          ...product,
          quantityCount: product.quantityCount + quantityCount,
        };
      }
    });
    if (PresentInCart) {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 2000);
    }

    // if present is true add new product in cart
    if (!PresentInCart) {
      const newProduct = { ...productDetail, quantityCount };
      console.log(quantityCount);
      setCart([...cart, newProduct]);
      console.log(cart);
      console.log(cart.length);
    }

    // console.log(productDetail);
  };
  localStorage.setItem("cartArrays", JSON.stringify(cart));

  // useEffect(() => {
  //   // Load cart from local storage on page load
  //   const savedCart = JSON.parse(localStorage.getItem("cartArrays")) || [];
  //   setCart(savedCart);
  // }, []); // Empty dependency array ensures this runs only on mount

  // const addProductToCart = (productDetail) => {
  //   let presentInCart = false;

  //   // Check if the product is already in the cart
  //   const updatedCart = cart.map((product) => {
  //     if (productDetail.id === product.id) {
  //       presentInCart = true;
  //       return {
  //         ...product,
  //         quantityCount: product.quantityCount + quantityCount,
  //       };
  //     }
  //     return product;
  //   });

  //   if (!presentInCart) {
  //     // If not present, add the new product to the cart
  //     const newProduct = { ...productDetail, quantityCount };
  //     setCart([...updatedCart, newProduct]);
  //   } else {
  //     // Update local storage after updating the cart state
  //     localStorage.setItem("cartArrays", JSON.stringify(updatedCart));
  //   }

  //   if (presentInCart) {
  //     setAlertMessage(true);
  //     setTimeout(() => {
  //       setAlertMessage(false);
  //     }, 2000);
  //   }
  // };

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
