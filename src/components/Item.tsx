import React from 'react';
import ClayCard from '@clayui/card';


enum CartItemType {
    DIGITALCOPY = 1,
    BOOKVIEWING = 2
}

interface Product
{
    name: string,
    price: number,
    stocked: boolean,
    code: string
}

interface BasketItem extends Product
{
    type: CartItemType
}

interface Basket
{
    products: [BasketItem]
}

class Item extends React.Component<{product:Product}> {


    render() {
        let product = this.props.product;
        //let url = "https://axielltest.foxycart.com/cart?name="+product.name+"+&price="+product.price+"&code="+product.code+"&image=https://via.placeholder.com/75/BB3333/000000&category=Downloads";
        //let url = "https://axielltest.foxycart.com/cart?name="+product.name + " (" + product.code + ")+&price="+product.price+"&code="+product.code+"&quantity_max=1";

        /*var originalSetItem = localStorage.setItem;

        localStorage.setItem = function(key, value) {
            var event = new Event('itemInserted');

            //event.value = value; // Optional..
            //event.key = key; // Optional..

            document.dispatchEvent(event);

            originalSetItem.apply(this, arguments);
        };*/


        function addToStorage(data : Product, type: CartItemType) {
            // TODO: Check for duplicates
            let storage = localStorage.getItem("test") || "";
            let basketItem: BasketItem = {name : data.name, price: data.price, stocked: data.stocked, code: data.code, type: type}

            if(storage) {
                let basket: Basket = JSON.parse(storage);
                if(!basket.products) {
                    console.error("WRONG FORMAT OF BASKET!");
                    basket = {products: [basketItem]};
                }

                // Check if already in basket.
                console.log("Adding to storage");
                basket.products.push(basketItem);
                localStorage.setItem("test", JSON.stringify(basket));
            } else {
                let basket: Basket = {products: [basketItem]};
                console.log("No basket, creating a new.")
                localStorage.setItem("test", JSON.stringify(basket));
            }
            //localStorage.setItem("test", JSON.stringify(data));
        }

        return (

                <ClayCard data-horizontal>
                    <ClayCard.Row>
                        <div className="autofit-col">
                            <img
                                alt="thumbnail"
                                className="card-item-first"
                                src="http://via.placeholder.com/150/BB3333/000000"
                                style={{ width: "150px" }}
                            />

                        </div>
                        <div className="col-md-7">
                            <section className="autofit-section">
                                <h2>{product.name}</h2>
                                <p>
                                    {
                                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                                    }
                                </p>
                            </section>
                        </div>
                        <div className="col-md-5">
                            <section className="autofit-row-center">
                                <br/>

                                <button onClick={() => addToStorage(product, CartItemType.DIGITALCOPY)} className="btn btn-primary">
                                    <span> Buy digital copy </span>
                                    <i>${product.price}</i>
                                </button>
                                <br/><br/>
                                <button onClick={() => addToStorage(product, CartItemType.BOOKVIEWING)} className="btn btn-primary">
                                    <span> Book viewing </span>
                                </button>
                            </section>
                        </div>
                    </ClayCard.Row>
                </ClayCard>

        )
    }
}

export default Item;
/*
<a href={url}>{product.name} (${product.price})</a>



<li key={i}><a href="https://axielltest.foxycart.com/cart?name=Cool%20Example&price=10&color=red&code=sku123">{product.name} (${product.price})</a></li>;*/