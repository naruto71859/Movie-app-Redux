import React from "react";
import Spin from "./Spin";

// export default function Hoc(Component) {
//   return function WihLoadingComponent({ isLoading, ...props }) {
//     if (!isLoading ) return <Spin/>;
//     return  <Component { ...props }/>;
//   };
// }
const Hoc = (Component) => {
  return  function LoadingHocComp({isLoading, ...props}){
     if(isLoading){
         return (<Spin />)
      }else{
         return (<Component {...props} />)
      }
  }
}
export default Hoc


