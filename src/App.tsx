import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import ClayLayout from '@clayui/layout';
import Shop from './components/Shop';
import Cart from './components/Cart';
import "@clayui/css/lib/css/atlas.css";


function shuffle(array:any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}



function App() {

    const PRODUCTS = [
        {name: 'Library picture', price: 10, stocked: true, code: 'f3e2ed24-b627-4ef9-8ab7-9f53aaff96dfX'},
        {name: 'Snowman', price: 12, stocked: true, code: '029e5c90-0166-4df5-8057-baca70768a5bX'},
        {name: 'Concrete', price: 14, stocked: false, code: '642f332d-c4f3-486e-9071-04468caa70c6X'},
        {name: 'Songbird', price: 16, stocked: true, code: '5cfbccf7-6810-4b94-b99f-d05966e8edfeX'},
        {name: 'Birch leaves', price: 18, stocked: false, code: 'c051b780-055f-4d76-990b-9acb0aabd9d6X'},
        {name: 'Mars lander', price: 20, stocked: true, code: '1a364095-6afe-472c-b222-b46f1b3e73ddX'}
    ];


    return (
        <div>
            <Router>
                <ClayLayout.ContainerFluid view className="App">
                    <ClayLayout.Row justify="center">
                        <ClayLayout.Col size={5}>
                            <header className="App-header">
                                <h1>Federated search - Workflow</h1>
                            </header>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/shop">Buy digital copies</Link></li>
                                <li><Link to="/enq">Enquire about an item (not started)</Link></li>
                                <li><Link to="/book">Book viewing of an item (not started)</Link></li>

                            </ul>
                            <p data-fc-id="minicart" style={{display: "none"}}>
                                <a href="https://axielltest.foxycart.com/cart?cart=view">
                                    Show cart
                                </a>
                            </p>
                            <hr/>
                        </ClayLayout.Col>
                    </ClayLayout.Row>
                </ClayLayout.ContainerFluid>
                <ClayLayout.ContainerFluid view>
                    <ClayLayout.Row justify="center">
                        <ClayLayout.Col size={10}>
                            <Switch>
                                <Route exact path="/">
                                    <h1>Home</h1>
                                </Route>
                                <Route path="/shop">
                                    <Shop products={shuffle(PRODUCTS)}/>
                                </Route>
                                <Route path="/enq">
                                    <h1>Enquire</h1>
                                </Route>
                                <Route path="/book">
                                    <h1>Book viewing</h1>
                                </Route>
                            </Switch>
                        </ClayLayout.Col>
                    </ClayLayout.Row>
                </ClayLayout.ContainerFluid>
            </Router>
            <Cart/>
        </div>
  );
}

export default App;
