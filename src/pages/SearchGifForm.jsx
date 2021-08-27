import React, {useState} from 'react';
import axios from "axios";
import Loader from "./Loader";

const endpoint = 'https://api.giphy.com/v1/gifs/search'
const apikey = '3ejnZPnQHUneTCi7oxzIep8mGWBgY0PP'

function SearchGifForm(props) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const renderGifs = () => {
        if (isLoading) {
        return <Loader />;
        }
        return data.map(el => {
        return (
            <div key={el.id} className="gif-item">
              <img src={el.images.fixed_height.url} alt="images" />
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
            Unable to get Gifs, please try again in a few minutes
            </div>
        );
        }
    };

    const handleSearchChange = event => {
        setSearch(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try {
        const results = await axios(`${endpoint}`, {
            params: {
            api_key: `${apikey}`,
            q: search,
            limit: 9
            }
        });
        setData(results.data.data);
        } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
        }

        setIsLoading(false);
    };

  return (
    <div className="m-2">
      {renderError()}
      <form className="form-inline justify-content-center m-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        >
        Go
        </button>
      </form>
      <div className="container gif-list">{renderGifs()}</div>
    </div>
  );
}

export default SearchGifForm;