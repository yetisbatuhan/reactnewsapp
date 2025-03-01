import React, { useEffect, useState } from 'react';
import Main from '../components/Main/main';
import newsApi from '../services/newsApi';

const Technology = () => {
    const [News, setNews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await newsApi.mainNews('Technology'); 
                setNews(data);
                
            } catch (error) {
                console.error('Error fetching main news:', error);
            }
        };
        fetchData();
    }, []);
   
return (
    <div>
        <Main News={News} />
    </div> )
}

export default Technology;
