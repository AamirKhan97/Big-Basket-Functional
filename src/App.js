import React from "react";
import { Provider } from "react-redux";
import './App.css';
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import Admin from "./components/products/Admin";
import CreateProduct from "./components/products/CreateProduct";
import UpdateProduct from "./components/products/UpdateProduct";


function App() {

  return (

    <React.Fragment>

        <Provider store={store}>
      
        <Router>
            <Navbar/>
          <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/productList" component={ProductList}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/createProduct" component={CreateProduct}/>
                <Route exact path="/updateProduct/:id" component={UpdateProduct}/>
          </Switch>
        </Router>
        </Provider>


    

      </React.Fragment>

      );
}


      export default App;


