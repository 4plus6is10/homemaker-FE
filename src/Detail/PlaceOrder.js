import React,{ useContext, useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import "./PlaceOrder.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import productimage from './product.jpg'

function PlaceOrder({id, name, imglink, price, category, rating, buylink}) {

    const [{basket}, dispatch] = useStateValue();
    
const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
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
                    <img className="placeorder__image" src={productimage} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder__description">
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>
                        citari Office Rules Work As A Team Framed Canvas Wall Art Inspirational Wall Art for Office Motivational Quotes Wall Decor Modern Office Wall Decor
                        </div>

                        <hr></hr>
                        <div>
                            <div className="textgap">Price:	<span className="pricetag"> {price}</span></div>
                            <div className="textgap">Category:	<span className="category"> {category}</span></div>
                            <div className="textgap">Buylink:	<span className="buylink"> {buylink}</span></div>
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