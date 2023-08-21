import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const SituationSkills = () => {
    const [situationskillsData, setSituationSkillsData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSituationSkillsData(result.data.situationcard);
        };
        fetchData();

       }, []);


    return (
        <>
             {situationskillsData?.map(situationskills => <Card key={situationskills.id} {...situationskills} />)}  {/*Question mark */}
        </>

    )
}

export default SituationSkills;