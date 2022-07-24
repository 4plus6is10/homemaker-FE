import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios";
import { Row, Col } from "antd";
import RecommandProductsDetail from "./RecommandProductsDetail";

function RecommandProduct() {
    const {asin} = useParams();
    console.log(asin);
    const [recommandAsins,setRecommandAsins] = useState([]);
    
    useEffect(() => {
        getRecommandProductsAsinByAsin();
    }, []);

    
    const getRecommandProductsAsinByAsin = () => {
      axios.get('http://localhost:5000/recoProducts/asin?asin='+asin)
        .then((res)=> {
          console.log(res.data);
          setRecommandAsins(res.data)});
    }

    // const recommandAsinsList = recommandAsins && recommandAsins.map((menu) => (<li>{menu}</li>));

    return (
        <div>
            {/* {recommandAsins} */}
            <RecommandProductsDetail recommandAsins={recommandAsins}/>
        </div>
    );
}

export default RecommandProduct;
