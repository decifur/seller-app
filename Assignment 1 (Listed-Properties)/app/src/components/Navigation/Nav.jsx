import styled from "styled-components";

const Nav = ({filterItem, menuList}) => {
    return <Navigation>
    Hello Nav
     {/* <nav className="navbar">
            <div className="btn-group">
                {menuList.map((currEle, index) => {
                    return (
                        <button key = {index} className="btn-group__item" onClick={() => filterItem(currEle)}>
                            {currEle}
                        </button>
                    );
                })}
            </div>
        </nav> */}
    </Navigation>
}

export default Nav;

const Navigation = styled.div`
    width: 100%;
    height: 10%;
    background-color: royalblue;
`;