import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import twoImage from '../assets/force-majeure-00tlC0Clfrs-unsplash.jpg'
import benchImage from '../assets/alexander-grey-Q5peAduZISs-unsplash.jpg'
import hatImage from '../assets/bailey-alexander-pAYZOHbeZzM-unsplash.jpg'

const StyledImg = styled.img`
  width: 100%;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.75;
  }
`

const Home = () => {
  return (<>
      <h1>Stylin'</h1>
      <Link to="shop">
        <StyledImg src={twoImage} alt="" />
      </Link>
      <Link to="shop">
        <StyledImg src={benchImage} alt="" />
      </Link>
      <Link to="shop">
        <StyledImg src={hatImage} alt="" />
      </Link>
  </>)
}

export default Home;