import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  Pagination,
} from 'react-bootstrap';
import Moment from 'moment';
import _ from 'lodash';

import Helpers from '../../helpers/common';
import fakeFetch from '../../helpers/fakeFetch';
import './News.css';

class News extends Component {
  state = {
    // DATA
    news : [
    ],
    limit: 6,
    activePage: 1,
    totalNews: 0,
  }

  // LIFE CYCLE

  componentDidMount() {
    this.fetchNews()
  }
  // ACTION

  fetchNews = async (pages) => {
    try{
      const { limit } = this.state;
      pages = pages? pages : 1;
      const fetchResp = await fakeFetch.news(null, pages, limit);

      this.setState({news: fetchResp.selectedNews, totalNews: fetchResp.totalNews})
    } catch(err) {
      console.log(err)
    }
  }

  // HANDLE CHANGE

  handlePagination = (activePage) => {
    this.setState({activePage})
    this.fetchNews(activePage)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // RENDER

  renderNewsBlock = () => {
    const { news } = this.state;
    const { redirect } = Helpers;
    return (
      news.map(el => {
        const primaryImage = _.result(el, 'images[0].imgUrl');
        const primaryAltText = _.result(el, 'images[0].altText');
        return (
        <Grid item xs={12} sm={4}>
            <img className='news-image' src={primaryImage} alt={primaryAltText}/>
            <div className='news-info'>
              <div className='news-text'>
                <h3>{el.title}</h3>
                <i class="fas fa-tags"> {el.tags.join(', ')}</i>
                <p>{Moment(el.date).format("MMMM DD, YYYY")}</p>
              </div>
              <div
                className="button"
                onClick={() => {
                  redirect(this, 'news', el._id)
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }}
              >
                Read More
              </div>
              <hr/>
            </div>
        </Grid>
      )})
    )
  }

  renderPaginationNumber = () => {
    const {limit, activePage, totalNews} = this.state;
    const totalPage = Math.ceil(totalNews/limit);
    const { pagination } = Helpers;

    const printedNumber = pagination(activePage, totalPage);

    const renderedPagination = []

    renderedPagination.push(
      <Pagination.First 
        disabled={activePage === 1}
        onClick={() => this.handlePagination(1)}
      />
    )
    renderedPagination.push(
      <Pagination.Prev
        disabled={activePage === 1}
        onClick={() => this.handlePagination(activePage - 1)}
      />
    )

    if(printedNumber[0] !== 1) {
      renderedPagination.push(<Pagination.Ellipsis />)
    }
    for(let i = 0; i < printedNumber.length; i++) {
      // if(activePage === printedNumber[i]){
      //   renderedPagination.push(<Pagination.Item active>{printedNumber[i]}</Pagination.Item>)  
      //   continue;
      // }
      renderedPagination.push(
        <Pagination.Item
          active={activePage === printedNumber[i]}
          onClick={() => this.handlePagination(printedNumber[i])}
        >
          {printedNumber[i]}
        </Pagination.Item>
      )
    }
    if(printedNumber[printedNumber.length - 1] !== totalPage) {
      renderedPagination.push(<Pagination.Ellipsis />)
    }
    renderedPagination.push(
      <Pagination.Next
        onClick={() => this.handlePagination(activePage + 1)}
        disabled={activePage === Math.ceil(totalNews / limit)}
      />
    )
    renderedPagination.push(
      <Pagination.Last
        onClick={() => this.handlePagination(Math.ceil(totalNews / limit))}
        disabled={activePage === Math.ceil(totalNews / limit)}
      />
    )
  
    return renderedPagination
  };
  render() {
    const {renderNewsBlock} = this;
    return (
      <div className="custom-container news-container">
        <Grid container spacing={10} >
          {renderNewsBlock()}
        </Grid>
        <div className="pagination-container">
          <Pagination  size='lg'>
            {this.renderPaginationNumber()}  
          </Pagination>
        </div>
      </div>
    );
  }
}

export default News;