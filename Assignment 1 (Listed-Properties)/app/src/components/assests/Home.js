import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import NavBar from './NavBar';
import CardData from '../Api/cardData';

const Home = () => {
    const [cardData, setCardData] = useState([]);
    const [menuList, setMenuList] = useState([]);

    // Save the original data when the component mounts
    useEffect(() => {
        setCardData(CardData);
        setMenuList([
            ...new Set(
                CardData.map((currEle) => {
                    return currEle.loc;
                })
            ),
        ]);
    }, []);

    const filterItem = (loc) => {
        if (loc === "View All") {    
            // Reset to the original data when "View All" is selected
            setCardData(CardData);
            setMenuList([
                ...new Set(
                    CardData.map((currEle) => {
                        return currEle.loc;
                    })
                ),
            ]);
            return;
        }

        const updatedList = cardData.filter((currEle) => {
            return currEle.loc === loc;
        });
        setCardData(updatedList);
    };

    return (
        <>
            <center>
                <h1>Featured Listed Property</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit beatae tempora fugiat recusandae, eum unde magnam expedita ad ab adipisci cumque ratione quae soluta.</p>
            </center>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <CardComponent cardData={cardData} />
        </>
    );
};

export default Home;
