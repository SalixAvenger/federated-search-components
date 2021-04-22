import React from 'react';
import ClayLayout from '@clayui/layout';
import ClayCard from "@clayui/card";
import ClayDatePicker from '@clayui/date-picker';
import ClayIcon from '@clayui/icon';


enum CartItemType {
    DIGITALCOPY = 1,
    BOOKVIEWING = 2
}

interface Product
{
    name: string,
    price: number,
    stocked: boolean,
    code: string,
    type: CartItemType
}

interface CartTypeCategory
{
    products: Product[]
    type: CartItemType
}

type Products = Product[];
type CartTypes = CartTypeCategory[];

interface Props {

}

interface State {
    products: CartTypes;
}

let spritemap = './icons.svg';

function compare( a:Product, b:Product ) {
    if ( a.type < b.type ){
        return -1;
    }
    if ( a.type > b.type ){
        return 1;
    }
    return 0;
}

class Cart extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        window.addEventListener('itemInserted', () => this.getCart());
    }

    componentWillUnmount() {
        window.removeEventListener('itemInserted', () => this.getCart());
    }

    getCart() {
        console.log("Should get cart now...");
        var cart = localStorage.getItem("test");
        if (cart) {
            var jsonCart = JSON.parse(cart);

            if(jsonCart && jsonCart.products) {
                console.log(jsonCart.products);
                /*this.setState({
                    products: jsonCart.products
                });*/

                let cartMain: CartTypes = [];
                jsonCart.products.forEach(function(p:Product){
                    console.log("A product:", p);

                    let cartItemTemp:CartTypeCategory;

                    cartMain.forEach(function(c:CartTypeCategory) {
                        if(c.type === p.type) {
                            cartItemTemp = c;
                            return;
                        }
                    });

                    // @ts-ignore
                    if(cartItemTemp) {
                        cartItemTemp.products.push(p);
                    } else {
                        cartMain.push({type: p.type, products: [p]})
                    }
                })
                console.log("CARTMAIN:", cartMain);
                this.setState({
                    products: cartMain
                });
            }

        } else {
            this.setState({
                products: []
            });
        }



    }

    render() {

        /***
         *
         * TODO: Empty cart-button
         * TODO: Close cart-button
         * TODO: Different types of content (shop.tsx)
         *
         */
        let dateHolder:string = "";

        return (
            <div id={"cart"} className={"hidden"}>
                <ClayLayout.ContainerFluid view>
                    <ClayLayout.Row>
                        <ClayLayout.Col size={9}>
                            <h1>Basket</h1>
                        </ClayLayout.Col>
                        <ClayLayout.Col size={3}>
                            <button className="btn btn-primary" onClick={function(e){localStorage.removeItem('test');window.dispatchEvent(new Event('itemInserted'));}}>Clear</button>
                            <i>&nbsp;</i>
                            <button className="btn btn-primary" onClick={function(e){let el = document.getElementById('cart');el && el.classList.add('hidden');}}><ClayIcon symbol="times" spritemap={spritemap} /></button>
                        </ClayLayout.Col>
                    </ClayLayout.Row>
                </ClayLayout.ContainerFluid>
                
                <ClayLayout.ContainerFluid view>
                {this.state.products.map(
                    (theType, i) =>
                        <ClayLayout.Row key={i}>
                            <ClayLayout.Col size={12}>
                                {(theType.type === CartItemType.DIGITALCOPY) &&
                                <div className={"center"}><h2>Digital Copy</h2></div>
                                }
                                {(theType.type === CartItemType.BOOKVIEWING) &&
                                <div className={"center"}><h2>Book viewing</h2></div>
                                }
                                <ul>
                                    {theType.products.sort(compare).map(
                                        (product, j) =>

                                        <ClayCard data-horizontal key={j} className={'cartitemcard'}>
                                            <ClayCard.Row>

                                                <div className="col-md-10">
                                                    <h3>{product.name}</h3>
                                                    <span>yada yada yada</span>
                                                </div>
                                                <div className="col-md-2">
                                                    <button className="btn btn-primary">
                                                        <ClayIcon symbol="times" spritemap={spritemap} />
                                                    </button>
                                                </div>
                                            </ClayCard.Row>
                                            <ClayCard.Row>
                                                <div className="col-md-4">
                                                    {(product.price && product.type === CartItemType.DIGITALCOPY) &&
                                                    <span><b>Price:</b> ${product.price}</span>
                                                    }
                                                    {(product.price && product.type === CartItemType.BOOKVIEWING) &&
                                                    <ClayDatePicker
                                                        onValueChange={()=>{}}
                                                        placeholder="2021-05-28"
                                                        spritemap={spritemap}
                                                        value={dateHolder}
                                                        years={{
                                                            end: 2024,
                                                            start: 1997
                                                        }}
                                                    />
                                                    }
                                                </div>
                                            </ClayCard.Row>
                                        </ClayCard>
                                    )}
                                </ul>
                                <div className={"center"}>
                                    {(theType.type === CartItemType.DIGITALCOPY) &&
                                    <button className={'btn btn-primary center'}>Order</button>
                                    }
                                    {(theType.type === CartItemType.BOOKVIEWING) &&
                                    <button className={'btn btn-primary center'}>Book</button>
                                    }
                                </div>
                            </ClayLayout.Col>
                        </ClayLayout.Row>
                )}
                </ClayLayout.ContainerFluid>


            </div>
        );
    }
}


/*

                <ul>
                    {this.state.products.sort(compare).map(
                        (product, i) =>
                            <li key={i}>{i} <b>{product.name}</b> ({product.type})</li>
                    )}
                </ul>
 */

export default Cart;