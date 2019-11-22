import styled from 'styled-components';
import { ArrowLeftWhite, ArrowRightWhite } from '~/assets/images';

export const Container = styled.div`
  width: 100%;
  background-color: var(--gray);
  margin-bottom: 60px;
  position: relative;
  .banner-simple {
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #1892f2;
  }
  .carousel.carousel-slider {
    z-index: 0;
    ul.control-dots {
      display: none;
    }
    p.carousel-status {
      bottom: 50px;
      width: 553px;
      font-family: var(--maven);
      font-size: 16px;
      line-height: 1.5;
      color: #ffffff;
      display: ${props => (props.Arrow ? 'block' : 'none')};
      left: 14.2%;
      top: auto;
      bottom: 15px;
    }
    .control-arrow.control-prev,
    .control-arrow.control-next {
      top: 50%;
      transform: translateY(-50%);
      height: 35px;
      width: 35px;
      left: 50px;
      opacity: 1;
      background-image: url(${ArrowLeftWhite});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      display: ${props => (props.Arrow ? 'block' : 'none')};
      &:hover {
        background-color: transparent;
        opacity: 0.7;
      }
      &:before {
        display: none;
      }
    }
    .control-arrow.control-next {
      left: auto;
      right: 50px;
      background-image: url(${ArrowRightWhite});
    }
  }
  .thumbs-wrapper.axis-vertical {
    display: none;
  }
`;