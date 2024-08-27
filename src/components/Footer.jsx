import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../utils/devices";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #34495E;
  color: #BDC3C7;
  padding: 1em;

  @media only screen and ${devices.md} {
    flex-direction: column;
    gap: 20px;
  }

  & a {
    color: #FFFFFF;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="company-info">
        <div className="address">
          <p>456 Broadway Ave New York, NY 10013</p>
        </div>
        <div className="contacts">
          <p>Email: support@fakemail.com</p>
          <p>General info number: (555) 123-4567</p>
        </div>
      </div>
      <div className="customer-support">
        <h3>CUSTOMER SUPPORT</h3>
        <ul>
        <li>
          <Link>Customer Service</Link>
        </li>
        <li>
          <Link>Store Locator</Link>
        </li>
        <li>
          <Link>FAQs</Link>
        </li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer;