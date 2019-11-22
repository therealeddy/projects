import styled, { css, keyframes } from "styled-components";
import { ArrowBackGreenConsultora } from "~/assets/images";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  .products-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    /* grid-template-rows: 215px 215px; */
  }
  ${props =>
    props.loading &&
    css`
      svg.loading {
        grid-column-start: 2;
        margin: 0 auto;
        animation: ${rotate} 0.7s linear infinite;
      }
    `}
  .block-content {
    background-color: white;
    position: relative;
    width: 100%;
    display: block;
    border-radius: 10px;
    &.search {
      height: 420px;
      margin-bottom: 40px;
      box-shadow: 10px 10px 70px 0 rgba(0, 0, 0, 0.5),
        inset 0px -112px 0px -100px #fdf4f8;
      padding: 30px;
      @media (min-width: 768px) {
        padding: 0 90px;
      }
      .title {
        color: #de4781;
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 20px;
        align-items: center;
        @media (min-width: 576px) {
          font-size: 30px;
        }
      }
    }
    &.products {
      margin-bottom: 40px;
      box-shadow: 10px 10px 70px 0 rgba(0, 0, 0, 0.5);
      .list {
        padding: 20px;
        @media (min-width: 576px) {
          padding: 70px;
        }
      }
      .bottom {
        padding: 40px 20px;
        background-color: #fdf4f8;
        border-radius: 0 0 10px 10px;
        @media (min-width: 576px) {
          padding: 40px 70px;
        }
        .back {
          color: #de4781;
          font-weight: 700;
          text-decoration: underline;
          font-size: 20px;
          margin-bottom: 30px;
          @media (min-width: 768px) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .cliente-info {
    @media (max-width: 991px) {
      margin-bottom: 30px;
    }
    p {
      margin: 0;
      color: black;
    }
    .name {
      font-size: 16px;
    }
    .cpf {
      font-size: 14px;
    }
  }
  .btn-confirm {
    width: 100%;
    display: block;
    height: 80px;
    background-color: #94da49;
    color: white;
    outline: none !important;
    font-size: 25px;
    font-weight: 700;
    border: 0px solid;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s linear;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
      inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const RequestProduct = styled.button`
  grid-column-start: 2;
  background-color: transparent !important;
  color: #319a89 !important;
  text-decoration: none !important;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: 250px;
  position: relative;
  height: 40px;
  font-size: 13px;
  font-weight: 700;
  /* margin-bottom: 30px; */
  cursor: pointer;
  outline: none !important;
  border: 0px solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  &:after {
    content: "";
    display: block;
    width: 15px;
    height: 25px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -10px;
    top: auto;
    transition: all 0.2s ease-in-out;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${ArrowBackGreenConsultora});
  }
  &:hover {
    opacity: 0.7;
  }
  &.menos {
    &:after {
      bottom: auto;
      top: -10px;
      transform: rotate(177deg);
    }
  }
`;
