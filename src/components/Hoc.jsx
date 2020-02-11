import React from "react";
import Spin from "./Spin";

// export default function Hoc(Component) {
//   return function WihLoadingComponent({ isLoading, ...props }) {
//     if (!isLoading ) return <Spin/>;
//     return  <Component { ...props }/>;
//   };
// }
const Hoc = Component => {
  return function LoadingHocComp({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
          style={{ height: "700px" }}
        >
          <div className=' mx-4'> <h1>Loading </h1> </div>
          <div><Spin /></div>
        </div>
      );
    } else {
      return <Component {...props} />;
    }
  };
};
export default Hoc;
