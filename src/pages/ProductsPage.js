import React from "react";

import Loader from "../components/loader/Loader";

const ProductsPage = (props) => {
  if (props.user.username) {
    return (
      <div>
        <h1>Products Page</h1>
        {/* {props.user.username ? props.user.username : <Loader />} */}
        {props.user.username}
      </div>
    );
  } else {
    return (
      <Loader />
    )
  }
};

// const ProductsPage = (props) => {
//   return props.user ? (
//     <div>
//       <h1>Products Page</h1>
//       {/* {props.user.username ? props.user.username : <Loader />} */}
//       {props.user.username}
//     </div>
//   ) : (
//     <Loader />
//   )
// };

export default ProductsPage;
