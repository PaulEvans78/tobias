import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Languages = () => {
    const [languagesData, setLanguagesData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setLanguagesData(result.data.languagescard);
        };
        fetchData();

       }, []);


    return (
        <>
             {languagesData?.map(languages => <Card key={languages.id} {...languages} />)}  {/*Question mark */}
        </>

    )
}

export default Languages;