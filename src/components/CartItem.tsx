import React from 'react';
import ClayCard from '@clayui/card';

interface Product
{
    name: string,
    price: number,
    stocked: boolean,
    code: string
}

interface BasketItem
{
    product: Product,
    num: number
}

interface Basket
{
    products: [BasketItem]
}

class CartItem extends React.Component<{product:Product}> {


    render() {
        let product = this.props.product;

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
                                    "cart item"
                                }
                            </p>
                        </section>
                    </div>
                    <div className="col-md-5">
                        <section className="autofit-row-center">
                            <span>Stuff...</span>
                        </section>
                    </div>
                </ClayCard.Row>
            </ClayCard>

        )
    }
}

export default CartItem;
/*
<a href={url}>{product.name} (${product.price})</a>



<li key={i}><a href="https://axielltest.foxycart.com/cart?name=Cool%20Example&price=10&color=red&code=sku123">{product.name} (${product.price})</a></li>;*/