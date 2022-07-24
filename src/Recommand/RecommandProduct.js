import React, { useEffect, useState, Suspense} from "react";
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


    return (
        <div>
            {/* <Suspense fallback={<div>loading...</div>}> */}
                <RecommandProductsDetail asin={asin}/>
                {/* <RecommandProductsDetail /> */}
            {/* </Suspense> */}
        </div>
    );
}

export default RecommandProduct;
