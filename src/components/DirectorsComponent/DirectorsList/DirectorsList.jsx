import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const DirectorsList = () => {
    const [directorslistData, setDirectorsListData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setDirectorsListData(result.data.directorslistcard);
        };
        fetchData();

       }, []);


    return (
        <>
             {directorslistData?.map(directorslist => <Card key={directorslist.id} {...directorslist} />)}  {/*Question mark */}
        </>

    )
}

export default DirectorsList;