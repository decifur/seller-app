import React, { useEffect, useState } from 'react'
import './CardComponent.css';
import IMG from '../images/city3.jpg';

const CardComponent = ({ cardData }) => {

    // const [items, setItems] = useState(cardData);
    const [visible, setVisible] = useState(6);
    const [showBtn, setShowBtn] = useState(0);

    const showMoreItems = () => {
        setVisible((prevVal) => prevVal + 3);
    }

    // useEffect(() => {
    //     fetch("../Api/cardData")
    //     .then((res) => res.json())
    //     .then((data) => setItems(data));
    // }, []);

    return (
        <>
            <section className="card_component">
                {
                    cardData.slice(0,visible).map((currEle, index) => {
                        const { id, description, price, location, image, type, popular } = currEle;
                        return (
                            <>
                                <div className="card_box" key={index}>
                                    <div className="upper_part">
                                        <div className="img_section">
                                            <img src={IMG} alt="" />
                                        </div>
                                        <div className="upper_text1">
                                        <div className="tag u1">{type}</div>
                                        </div>
                                        <div className="upper_text2">
                                            <div className="fav u1">fav</div>
                                        </div>
                                    </div>
                                    <div className="lower_part">
                                        <div className="location">
                                            <h4>{location}</h4>
                                        </div>
                                        <div className="description">
                                            <h2>{description}</h2>
                                        </div>
                                        <div className="features">
                                            <div className="rooms f1">3 room</div>
                                            <div className="bed f1">4 bed</div>
                                            <div className="bath f1">1 bath</div>
                                            <div className="space f1">732 sft</div>
                                        </div>
                                        <div className="last">
                                            <div className="price">
                                                <h3>{price} <span>/month</span></h3>
                                            </div>
                                            <div className="btn">
                                                <h4>Read More</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
                <div className="btn-show">
                    <button onClick={showMoreItems} className='showBtn'>Show More</button>
                </div>

            </section>
        </>
    )
}

export default CardComponent;