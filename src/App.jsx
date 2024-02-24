import { useEffect, useState } from "react"
import { Provider } from "react-redux";
import Categories from "./components/Categories";
import store from "./redux/store";
import Survival from "./components/Survival";
import HiddenWord from "./components/HiddenWord";
import Keyboard from "./components/Keyboard";


const App=()=>{
  const [data, setData]=useState()
  async function fetchData() {
    try {
      const response = await fetch('../data.json'); 
      const data = await response.json();
      // console.log(data);
      setData(data)
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }
  useEffect(() => {
    fetchData()
  },[]);
  

  
  return (
    <Provider store={store}>
      <div className="app">
        <div className="hero">
          <Categories data={data}/>
          <Survival/>
        </div>
        <HiddenWord/>
        <Keyboard/>
      </div>
    </Provider>
  )
} 
export default App

