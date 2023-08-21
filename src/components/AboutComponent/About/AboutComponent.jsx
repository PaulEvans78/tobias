import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const AboutComponent = () => {
    const [aboutcomponentData, setAboutComponentData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setAboutComponentData(result.data.aboutcomponent);
        };
        fetchData();

       }, []);


    return (
        <>
             {aboutcomponentData?.map(aboutcomponent => <Card key={aboutcomponent.id} {...aboutcomponent} />)}  {/*Question mark */}
        </>

    )
}

export default AboutComponent;