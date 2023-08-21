import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const ExperienceNameHolder = () => {
    const [experiencenameholderData, setExperienceNameHolderData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setExperienceNameHolderData(result.data.experiencecard);
        };
        fetchData();

       }, []);


    return (
        <>
             {experiencenameholderData?.map(experiencenameholder => <Card key={experiencenameholder.id} {...experiencenameholder} />)}  {/*Question mark */}
        </>

    )
}

export default ExperienceNameHolder;