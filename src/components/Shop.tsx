import React from 'react';
import Item from './Item';


interface Product
{
    name: string,
    price: number,
    stocked: boolean,
    code: string
}

interface Products
{
    products: Product[]
}

class Shop extends React.Component<Products> {


    render() {



        return (
            <div>

                <h1>Search results</h1>

                <ul>
                {this.props.products.map(
                    (product, i) =>
                        <Item key = {i} product={product}/>
                )}
                </ul>

            </div>
        );
    }
}

export default Shop;

/**


 <!--form action="https://axielltest.foxycart.com/cart" method="post" accept-charset="utf-8">
 <input type="hidden" name="name" value="Cool Example" />
 <input type="hidden" name="price" value="10" />
 <input type="hidden" name="code" value="sku123" />
 <label className="label_left">Size</label>
 <select name="size">
 <option value="small">Small</option>
 <option value="medium">Medium</option>
 <option value="large">Large</option>
 </select>
 <input type="submit" value="Add a Cool Example" className="submit" />
 </form-->

 **/