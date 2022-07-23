import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import productimage from './product.jpg'


// {id, name, imglink, price, category, rating, buylink}를 props라 하고
function PlaceOrder({id, name, imglink, price, category, rating, buylink}) {

    const [{basket}, dispatch] = useStateValue();
    
const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            // props.id라 명시해주면 같은 값 출력
            id: id,
            name: name,
            imglink: imglink,
            price: price,
            category:category,
            rating: rating,
            buylink: buylink
        },
    });
};

    return (
        <div>
             <Grid container>
                <Grid item xs={5}>
                    <img className="placeorder__image" src={imglink} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder__description">
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>
                            {name}
                        </div>

                        <hr></hr>
                        <div>
                            <div className="textgap">Price:	<span className="pricetag"> ${price}</span></div>
                            <div className="textgap">Category:	<span className="category"> {category}</span></div>
                            <div className="textgap">Buylink:	<span className="buylink"> <a href={buylink} target='_blank'>{buylink}</a></span></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="placeorder__order">   
                                <button className="placeorder__button addToBasket" onClick={addToBasket}>Add to Cart</button>
                    </div>
                </Grid>
             </Grid>
            
        </div>
    );
}

export default PlaceOrder;