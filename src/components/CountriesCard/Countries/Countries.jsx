import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Countries = () => {
    const [countriesData, setCountriesData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setCountriesData(result.data.countriescard);
        };
        fetchData();

       }, []);


    return (
        <>
             {countriesData?.map(countries => <Card key={countries.id} {...countries} />)}  {/*Question mark */}
        </>

    )
}

export default Countries;