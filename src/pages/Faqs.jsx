import styled from "styled-components";
import scrollToTop from "../utils/scrollToTop";
import { useEffect } from "react";

const CenterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  text-align: center;
`

const loremParagraph = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate esse sequi autem! Nesciunt fuga, consectetur nihil veniam delectus natus? Numquam, fugit ratione! Sequi, corporis vitae nihil obcaecati tempore ut neque.'
const loremParagraphs = [];
for (let i = 0; i < 5; i++) {
  loremParagraphs.push(loremParagraph);
}


const Faqs = () => {

  useEffect(() => {
    scrollToTop();
  })

  return (
    <CenterContainer>
      <h1>FAQs</h1>
      {loremParagraphs.map(lorem => {
        return (<>
          <p>{lorem}</p>
          <br/>
        </>)
      })}
    </CenterContainer>
  )
}

export default Faqs;