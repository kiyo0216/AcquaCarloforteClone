import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled(animated.div)`
  height: 582px;
  width: 55vw;
  overflow-x: hidden;
  
  .slick-slide {
    margin-right: 20px;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
  }
`

const Item = styled(animated.div)`
  height: 500px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Image = styled(animated.img)`
  margin-bottom: 10px;
  max-height: 400px;
`

const Cat = styled(animated.h4)`
  margin: 0;
  font-size: 15px;
  text-transform: uppercase;
  color: #000;
  line-height: 1.4;
  font-family: 'Montserrat';
  font-weight: 400;
  margin-bottom: 10px;
`

const Name = styled(animated.h3)`
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.4;
  color: #404040;
  font-family: 'Montserrat';
`

const Dots = styled(animated.ul)`
  display: flex;
  list-style: none;
  margin-top: 70px;
`

const Dot = styled(animated.div)`
  height: 4px;
  width: 11vw;
  margin: 0;
  background: #333;
  opacity: 0.25;

  .slick-active & {
    opacity: 1;
  }

  @media screen and (max-width: 766px) {
    width: calc(20vw - 8px);
  }
`

export default function SliderSection() {
  const sliderRef = useRef(null)
  const isNine = useMediaQuery({ query: '(max-device-width: 990px)' })
  const isSeven = useMediaQuery({ query: '(max-device-width: 766px)' })

  function next() {
    sliderRef.current.slickNext()
  }

  function previous() {
    sliderRef.current.slickPrev()
  }

  const settings = {
    dots: true,
    dotsClass: "",
    appendDots: dots => <Dots>{dots}</Dots>,
    customPaging: function(i) {
      return (
        <Dot />
      )
    },
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          variableWidth: false
        }
      }
    ],
  }

  const data = [
    {
      "index": 0,
      "name": "Coming Soon",
      "src": "images/ComingSoon.png",
      "category": "Casa"
    },
    {
      "index": 1,
      "name": "Mò - Mare",
      "src": "images/MoMare.png",
      "category": "Profumo"
    },
    {
      "index": 2,
      "name": "Sò - Sale",
      "src": "images/SoSale.png",
      "category": "Profumo"
    },
    {
      "index": 3,
      "name": "Sù - Sole",
      "src": "images/SuSole.png",
      "category": "Profumo"
    },
    {
      "index": 4,
      "name": "Sè - Cielo",
      "src": "images/SeCielo.png",
      "category": "Profumo"
    }
  ]

  let itemWidth 

  if (isSeven) {
    itemWidth = '80vw'
  } else if (!isSeven && isNine) {
    itemWidth = '33vw'
  } else {
    itemWidth = '22vw'
  }

  return (
    <div className="slider">
      <div className="slidertexts">
        <h1 data-w-id="Heading 4" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="heading">Scopri tutti i prodotti<br />Acqua Carloforte</h1>
        <div data-w-id="TextBlock 5" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="text-block">Lasciati trasportare dalle emozioni uniche di questa perla del Mediterraneo.</div>
        <div className="div-block">
          <a href="#" className="button sliderbutton w-button" onClick={() => previous()}><span className="fontawesome"><strong></strong></span></a>
          <a href="#" className="button sliderbutton w-button" onClick={() => next()}><span className="fontawesome"><strong></strong></span></a>
        </div>
      </div>
      <Container>
        <Slider {...settings} ref={sliderRef} >
          { data.map((item) => (
            <Item key={item.index} style={{ width: itemWidth }}>
              <Image src={item.src} />
              <Cat>{item.category}</Cat>
              <Name>{item.name}</Name>
            </Item>
          ))}
        </Slider>
      </Container>
    </div>

  )
}
