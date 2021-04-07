import React from 'react';
import ClayCard from '@clayui/card';

interface Product
{
    name: string,
    price: number,
    stocked: boolean,
    code: string
}

class Item extends React.Component<{product:Product}> {


    render() {
        let product = this.props.product;
        //let url = "https://axielltest.foxycart.com/cart?name="+product.name+"+&price="+product.price+"&code="+product.code+"&image=https://via.placeholder.com/75/BB3333/000000&category=Downloads";
        let url = "https://axielltest.foxycart.com/cart?name="+product.name + " (" + product.code + ")" + "+&price="+product.price+"&code="+product.code+"&quantity_max=1";



        return (

                <ClayCard horizontal>
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
                                <a href={url} className="btn btn-primary">
                                    <span> Buy digital copy </span>
                                    <i>${product.price}</i>
                                </a>
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