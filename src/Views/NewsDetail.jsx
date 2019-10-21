import React, { Component } from 'react';
import Media from 'react-media';
import Moment from 'moment';
import { Carousel } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import fakeFetch from '../helpers/fakeFetch';
import './NewsDetail.css'

class NewsDetail extends Component {
  state = {
    title: '',
    content: '',
    images: [],
    date: new Date(),
    carouselIndex: 0,
    carouselDirection: null,
  }

  // LIFE CYCLE

  componentDidMount() {
    const pathArr = this.props.location.pathname.split('/')
    const newsId = pathArr[pathArr.length - 1];
    this.fetchNewsDetail(newsId)
  }

  // ACTION

  fetchNewsDetail = async (newsId) => {
    const newsDetail = await fakeFetch.newsDetail(newsId);

    this.setState({...newsDetail})
  }

  // HANDLE CHANGE

  handleSelect = (selectedIndex, e) => {
    this.setState({
      carouselIndex: selectedIndex,
      carouselDirection: e.direction
    })
  }

  // RENDER

  renderCarousel = () => {
    const { carouselIndex, carouselDirection, images } = this.state;
    return (
      <Carousel activeIndex={carouselIndex} direction={carouselDirection} onSelect={this.handleSelect}>
        {
          images.map(el => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-80 mx-auto"
                  src={el.imgUrl}
                  alt={el.title}
                />
                <Carousel.Caption>
                  <h3>{el.title}</h3>
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
        </Carousel>
    )
  }

  render() {
    const { title, date, content } = this.state;
    return (
      <div>
        <div className='news-jumbotron'>
          <div className='news-jumbotron-text'>
            <Media query="(min-width: 768px)">
              {matches =>
                matches ? (           
                  <div id='date-div'>
                    <h1>{Moment(date).format('DD')}</h1>
                    <h3>{Moment(date).format('MMM')}</h3>
                  </div>
                ) : (
                  null  
                )
              }
            </Media>
              <div id='title-div'>
                <h1>
                  {title}
                </h1>
              </div>

          </div>
        </div>
        <div className='custom-container content-block'>
          {this.renderCarousel()}
          <div className='paragraph-block'>
              <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewsDetail);