import styled from "styled-components";
import Nav from "./components/Navigation/Nav";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <MainContainer>
      <TopContainer>
        <div className="Heading">
          <h1>Featured Listed Property</h1>
          <p>
            Real estate can be brought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
      </TopContainer>

      <BottomContainer>
        <Nav/>
        <Content/>
      </BottomContainer>
    </MainContainer>
  );
};

export default App;

//Styles

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TopContainer = styled.section`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;

  .Heading {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .Heading h1{
    font-size: 30px;
    font-weight: 800;
  }

  .Heading p{
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }

`;
const BottomContainer = styled.section`
  height: 80%;
  width: 100%;
`;
