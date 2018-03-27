import React, { Component } from 'react'
import './Recommend.scss'
import CarouselComponent from '../../components/Carousel/Carousel'
import Album from '../../components/Album/Album'

export default class Recommend extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
        <Album />
      </div>
    )
  }
}