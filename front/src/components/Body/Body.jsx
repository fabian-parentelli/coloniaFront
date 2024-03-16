import Header from "../Header/Header";
import Products from "./Products/Products";
import { useEffect, useState } from "react";
import NewsMessage from "../news/NewsMessage/NewsMessage";
import { getNewsIsActiveApi } from '../../helpers/news/getNewsIsActive.api.js';
import NewSale from "../news/NewsSale/NewSale.jsx";

const Body = () => {

    const [newsMessage, setNewsMessage] = useState('newsSales');
    const [advert, setAdvert] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNewsIsActiveApi();
            if (response.status === 'success') {
                setNewsMessage('newsMessage');
                setAdvert(response.result);
            } else { console.log(response) };
        }; fetchData();
    }, []);

    return (
        <div>
            <Header />
            {newsMessage === 'newsMessage' && <NewsMessage advert={advert} />}
            {newsMessage === 'newsSales' && <NewSale advert={advert} />}
            <Products />
        </div>
    );
};

export default Body;