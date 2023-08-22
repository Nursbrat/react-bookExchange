
import { useSelector } from "react-redux";
import "./App.scss";
import RouteComponent from "./routeComponent";
import { useEffect } from "react";




const App = () => {

 const theme=useSelector(state=>state.theme)
 useEffect(()=>{
  console.log(theme)
 },[theme])

  return (
   <div data-theme={theme}>
    <RouteComponent/>
   </div>
  )
};

export default App;
