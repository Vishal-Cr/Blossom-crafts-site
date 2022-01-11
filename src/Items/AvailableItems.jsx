import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import ItemForm from './ItemForm';
import ProductItems from './ProductItem/ProductItems';
import { useContext,useEffect } from 'react';
import CartContext from '../Store/cart-context';
const DUMMY_ITEMS = [
    {
        id: 'm1',
        name: 'Vail',
        description: 'Made with Finest Material Roses and Pearls',
        price: 1999.99,
    },
    {
        id: 'm2',
        name: 'Boquet',
        description: 'A specialty for special Ocassions!',
        price: 1435.99,
    },
    {
        id: 'm3',
        name: 'Net',
        description: 'Beautifull, Gracious, Beautifuly crafted. ',
        price: 789.99,
    },
    {
        id: 'm4',
        name: 'Mala',
        description: 'StarStudded with finest Pearls And Flowers',
        price: 1259.99,
    },
];
export default function AvailableItems(props) {




const cartCtx=useContext(CartContext);



 const itemsList=DUMMY_ITEMS.map(item=>
    <ProductItems key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}/>
 
     )
    return <section className={classes.items}>
        <Card>
        <ul>
            {itemsList}
        </ul>
    </Card>
    </section>
}
