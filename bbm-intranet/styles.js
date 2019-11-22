import styled from 'styled-components';
import Images from '../../../assets/images';

export const Container = styled.div`
  width: 100%;
  background-color: var(--gray);
  margin-bottom: 100px;
  position: relative;
  .banner-simple {
    height: ${props => (props.bannerFull ? 'calc(100vh - 110px)' : '455px')};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .gravata {
      opacity: 0.7;
      border-radius: 100px;
      background-color: var(--blue-2);
      font-family: var(--maven);
      font-size: 14px;
      font-weight: bold;
      letter-spacing: -0.5px;
      color: var(--white);
      display: table;
      padding: 5px 20px;
      margin-bottom: 10px;
    }
    .title-banner {
      font-family: var(--maven);
      font-size: 60px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: -2px;
      color: var(--white);
      text-align: left;
      font-size: 32px;
      @media (min-width: 992px) {
        font-size: 60px;
      }
    }
  }
  .carousel.carousel-slider {
    z-index: 0;
    ul.control-dots {
      display: none;
    }
    p.carousel-status {
      top: auto;
      right: auto;
      bottom: 50px;
      width: 553px;
      opacity: 0.5;
      font-family: var(--maven);
      font-size: 16px;
      line-height: 1.5;
      color: var(--white);
      left: 15px;
      display: ${props => (props.Arrow ? 'block' : 'none')};
      @media (min-width: 576px) {
        left: 11%;
      }
      @media (min-width: 1200px) {
        left: 14.2%;
      }
    }
    .control-arrow.control-prev,
    .control-arrow.control-next {
      top: 50%;
      transform: translateY(-50%);
      height: 35px;
      width: 35px;
      left: 50px;
      opacity: 1;
      background-image: url(${Images.ArrowLeftWhite});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      display: none;
      @media (min-width: 576px) {
        display: ${props => (props.Arrow ? 'block' : 'none')};
      }
      &:hover {
        background-color: transparent;
        transform: translateY(-50%) scale(0.9);
      }
      &:before {
        display: none;
      }
    }
    .control-arrow.control-next {
      left: auto;
      right: 50px;
      background-image: url(${Images.ArrowRightWhite});
    }
  }
  .thumbs-wrapper.axis-vertical {
    display: none;
  }
  .goDown {
    height: 52px;
    width: 52px;
    border-radius: 100px;
    background-color: #229dff;
    position: absolute;
    bottom: -26px;
    margin: 0 auto;
    left: 0;
    border: none !important;
    right: 0;
    outline: none !important;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
      content: '';
      background-image: url(${Images.ArrowDown});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 12px;
      height: 12px;
      filter: brightness(0) invert(1);
      transition: all 0.2s ease-in-out;
    }
  }
`;