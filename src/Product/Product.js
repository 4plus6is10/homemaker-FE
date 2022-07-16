import React, { useContext } from 'react'
import Card from '../Search/card';

// const BASE_URL = "";

const Product = (props) => {

    const product = {
      id : props.id,
      seq: props.seq,
      name: props.name,
      asin: props.asin,
      price: props.price,
      buylink : props.buylink,
      imglink : props.imglink,
      category : props.category
    };
    return (
      <Card>
        <ul>
          <div> title={props.name}, description={`$${props.price}`} </div>
        </ul>
      </Card>
    )
}


    // await fetch(BASE_URL,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type' : 'application/json',
    //       },
    //       body: JSON.stringify({
    //         // 
    //       })
    //     }
    //   );
    


export default Product