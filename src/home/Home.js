import './Home.css';
import {baseUrl, job, restUriVacancy} from '../environment';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = baseUrl + job + restUriVacancy;
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
        console.log(data.data.data);
          {data.data.data.map(post => (
            <div key={post.categoryId}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
    );
}

export default Home;