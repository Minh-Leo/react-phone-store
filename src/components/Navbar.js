import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-1'>
              <i className='fas fa-cart-plus' /> my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.4rem;
    text-transform: capitalize;
    &:hover {
      color: var(--mainYellow) !important;
    }
  }
`;
