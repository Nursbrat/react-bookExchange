
import { useSelector } from "react-redux";

 import RouteComponent  from './components/RouteComponent'




const App = () => {

 const theme=useSelector(state=>state.theme)
  return (
   <div data-theme={theme}>
    <RouteComponent/>
   </div>
  )
};

export default App;
