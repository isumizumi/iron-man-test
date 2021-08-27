/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Loader from "./Loader";

const endpoint = 'https://api.giphy.com/v1/gifs/search'
const apikey = '3ejnZPnQHUneTCi7oxzIep8mGWBgY0PP'
const keyword = ["iron man", "tony stark"]

function GifList(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const results = await axios(`${endpoint}?q=${keyword[Math.floor(Math.random()*keyword.length)]}`, {
            params: {
                api_key: `${apikey}`,
                limit: 9
            }
            });
            console.log(results);
            setData(results.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }

        setIsLoading(false);
        };

        fetchData();
    }, []);

    const renderGifs = () => {
        if (isLoading) {
        return <Loader />;
        }
        return data.map(el => {
        return (
            <div key={el.id} className="gif-item">
                <img src={el.images.fixed_height.url} />
            </div>
        );
        });
    };

    const renderError = () => {
        if (isError) {
        return (
            <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
            >
            Sorry, something wrong. Please try again in a few minutes!
            </div>
        );
        }
    };

  return (
    <div className="m-2">
      {renderError()}
      <div className="container gif-list">{renderGifs()}</div>
    </div>
  );
}

export default GifList;