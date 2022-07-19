import React from 'react'
import './TotalPayment.css'
import CurrencyFormat from 'react-currency-format'

const TotalPayment = (props) => {

    const price = {
        price: props.price,
      };

  return (

    <div className='total_payment'>
                    
        <div className='payment'>

            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    금액 : <strong> {props.price} </strong>
                </p>
                </>

            )}

            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Add</button>

        </div>

    </div>
  )
}

export default TotalPayment