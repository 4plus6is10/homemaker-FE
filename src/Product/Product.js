import React, { useContext } from 'react'

// const BASE_URL = "";

const Product = (props) => {

    const product = {
      seq: props.seq,
      name: props.name,
      asin: props.asin,
      price: props.price,
      buylink : props.buylink,
      imglink : props.imglink,
      category : props.category
    };
    return {...product}
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