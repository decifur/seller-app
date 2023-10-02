// import styled from "styled-components";
// import "./Card.module.css";


const Card = () => {
  return (
      <ContentCard>
        {/* {cardData.map((currEle, index) => {
          const { id, name, price, location, image, type, popular} = currEle; */}
              <div className="card-container" >
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Mumbai</span>
                    <h2 className="card-title">Taj Hotel</h2>
                    <span className="card-description subtle">
                      15$ per hour
                    </span>
                    <div className="card-read">7 star</div>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}
                  <span className="card-tag subtle">Book Now</span>
                </div>
              </div>
        {/* } */}
        {/* ) */}
        {/* } */}
        
      </ContentCard>
  );
};
export default Card;

const card_div = styled.div`
    height: 80%;
    width: 80%;
    background-color: salmon;

    .card-container {
    margin: 25px auto 0;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;
    align-items: flex-start;
  }

  .card-container img {
    max-width: 100%;
    height: 300px;
  }

  .card {
    height: 700px;
    background-color: #fff;
    padding: 30px;
    position: relative;
    box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
    z-index: 1;
  }

  .card-body {
    display: inline-block;
  }
`;
