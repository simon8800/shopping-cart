import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import scrollToTop from "../utils/scrollToTop";
import twoImage from '../assets/force-majeure-00tlC0Clfrs-unsplash.jpg'
import benchImage from '../assets/alexander-grey-Q5peAduZISs-unsplash.jpg'
import hatImage from '../assets/bailey-alexander-pAYZOHbeZzM-unsplash.jpg'

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  width: 100%;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.75;
  }
`

const Home = () => {

  useEffect(() => {
    scrollToTop();
  }, [])
  
  return (
    <FlexColumn>
      <Link to="shop">
        <StyledImg src={twoImage} alt="" />
      </Link>
      <Link to="shop">
        <StyledImg src={benchImage} alt="" />
      </Link>
      <Link to="shop">
        <StyledImg src={hatImage} alt="" />
      </Link>
    </FlexColumn>
  )
}

export default Home;