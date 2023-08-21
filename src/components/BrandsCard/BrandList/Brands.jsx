import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Brands = () => {
    const [brandsData, setBrandsData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setBrandsData(result.data.brandscard);
        };
        fetchData();

       }, []);


    return (
        <>
             {brandsData?.map(brands => <Card key={brands.id} {...brands} />)}  {/*Question mark */}
        </>

    )
}

export default Brands;