import styled from "styled-components";
import Card from "./Card";
import propData from "../../assets/API/cardData";
import { useState } from "react";
import Nav from "../Navigation/Nav"

// const uniqueList = [
//   ...new Set(
//     propData.map((currEle) => {
//       return currEle.category;
//     })
//   ),
//   "All",
// ];

const Content = () => {
  const [cardData, setcardData] = useState(propData);
//   const [menuList, setMenuList] = useState(uniqueList);


//   const filterItem = (category) => {
//     if (category === "All") {
//       setcardData(propData);
//       return;
//     }
//     const updatedList = propData.filter((currEle) => {
//       return currEle.category === category;
//     });
//     setcardData(updatedList);
//   };

  return (
    <CardContainer>
            {/* <Nav filterItem={filterItem} menuList={menuList} /> */}
      <Card />
    </CardContainer>
  );
};

export default Content;

const CardContainer = styled.div`
  height: 90%;
  width: 100%;
  background-color: yellow;
`;
