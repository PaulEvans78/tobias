import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const SlideShow = () => {
    const [slideshowData, setSlideShowData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSlideShowData(result.data.slideshow);
        };
        fetchData();

       }, []);


    return (
        <>
             {slideshowData?.map(slideshow => <Card key={slideshow.id} {...slideshow} />)}  {/*Question mark */}
        </>

    )
}

export default SlideShow;