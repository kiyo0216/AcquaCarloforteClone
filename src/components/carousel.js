import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import { useSprings, animated, interpolate, config } from 'react-spring'
import Slider from 'react-slick'

import { CarouselContext } from '../contexts'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled(animated.div)`
  height: calc(100vh - 142px);
`

const Item = styled(animated.div)`
  width: 40vw !important;
  height: calc(100vh - 142px);
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  outline: none;

  @media screen and (max-width: 990px) {
    width: 100vw !important;
  }
`

const VideoName = styled(animated.div)`
  display: grid;
  grid-template: 1 / 1;
  margin-bottom: 50px;
`

const Video = styled(animated.video).attrs(props => ({
  autoplay: 'true',
  loop: true,
  muted: true,
  playsinline: true
}))`
  grid-area: 1 / 1 / 1 / 1;
  place-self: center;
  width: 100%;

  @media screen and (max-width: 990px) {
    max-width: 600px;
  }
`

const Name = styled(animated.h2)`
  grid-area: 1 / 1 / 1 / 1;
  place-self: center;
  z-index: 1;
  color: #FFF;
  font-size: 150px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Cormorant Garamond";
`

const Text = styled(animated.p)`
  color: #FFF;
  text-decoration: underline;
	font-size: 18px;
  font-weight: 200;
  font-family: "Montserrat";
  text-align: center;
  padding-bottom: 71px;
`

const Arrow = styled(animated.div)`
	position: absolute;
	width: 100px;
	height: 44px;
	top: calc(72vh - 142px);
	transform: translateY(-50%);

  @media screen and (max-width: 766px) {
    top: calc(90vh - 142px);
  }
`

function Next(props) {
  const { className, style, onClick } = props
  return (
    <Arrow
      className="slick-arrow"
      style={{ ...style, backgroundImage: `url("images/RightArrow.svg")`, backgroundRepeat: "no-repeat", right: "10%" }}
      onClick={onClick}
    />
  )
}

function Previous(props) {
  const { className, style, onClick } = props
  return (
    <Arrow
      className="slick-arrow"
      style={{ ...style, backgroundImage: `url("images/LeftArrow.svg")`, backgroundRepeat: "no-repeat", left: "10%" }}
      onClick={onClick}
    >
			<svg class="flickity-button-icon" viewBox="0 0 100 100">
				<path d="92.5 6.9 2.8 6.9 10 1 9.1 0 0 7.5 9.4 15.2 10.2 14.2 2.8 8.2 92.5 8.2 92.5 6.9" class="arrow" transform="translate(100, 100) rotate(180) ">
				</path>
			</svg>
		</Arrow>
  )
}

export default function Carousel() {
  const {carouselIndex, setCarouselIndex} = useContext(CarouselContext)

  const settings = {
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <Next />,
    prevArrow: <Previous />,
    afterChange: (current) => setCarouselIndex(current),
    responsive: [
      {
        breakpoint: 990,
        settings: {
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  }

  const data = [
    {
      "index": 0,
      "name": "Mò",
			"src": "videos/Mo.mp4",
			"text": "Scopri la fragranza MARE"
		},
    {
      "index": 1,
      "name": "Sò",
			"src": "videos/So.mp4",
			"text": "Scopri la fragranza SALE"
		},
    {
      "index": 2,
      "name": "Sù",
			"src": "videos/Su.mp4",
			"text": "Scopri la fragranza SOLE"
		},
    {
      "index": 3,
      "name": "Sé",
			"src": "videos/Se.mp4",
			"text": "Scopri la fragranza CIELO"
		}
  ]

  const springs = useSprings(data.length, data.map(item => ({ 
    o: carouselIndex === item.index ? 1 : 0,
    config: config.slow
  })))

  return (
		<Container>
			<Slider {...settings} >
				{ springs.map(({ o }, i) => (
					<Item key={i}>
						<VideoName>
							<Name>{data[i].name}</Name>
              <Video style={{ opacity: o.interpolate(o => `${o}`), transform: o.interpolate(o => `scale(${o})`) }} >
                <source src={data[i].src} type="video/mp4" />
              </Video>
						</VideoName>
						<Text style={{ opacity: o.interpolate(o => `${o}`) }}>{data[i].text}</Text>
					</Item>		
				))}
			</Slider>
		</Container>
  )
}
