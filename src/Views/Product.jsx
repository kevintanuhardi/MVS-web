import React, { Component } from 'react';
import _ from 'lodash';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import {
  withStyles
} from '@material-ui/core/styles';

import Helpers from '../helpers/common'
import fakeFetch from '../helpers/fakeFetch'
import './Product.css'

const styles = {
  card: {
    maxWidth: 345,
    height: '40vh',
    '&:hover': {
      boxShadow: "0px 3px 18px rgba(0,0,0,0.3), 2px 2px 1px rgba(0,0,0,0.3), 0px 2px 18px rgba(0,0,0,0.35)",
      cursor: "pointer",
    }
  },
  cardHeader: {
    height: '10vh'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  productImage: {
    height: '200px',
    width: '90%',
    objectFit: 'contain',
  },
  categoryBlock: {
    color: "#919191",
    '&:hover': {
      color: "#005894",
      cursor: "pointer"
    }
  },
  categoryImage: {
    height: "100px",
    width: "100px",
    filter: "grayscale(100%)",
    '&:hover': {
      filter: "grayscale(0%)"
    }
  }
};

class Product extends Component {
  state = {
    // page states
    selectedCategory : {},
    // data
    categories: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/categoriesImage/power-instruments.png`,
        title: "Power Instruments",
        description: 'Offering the ultimate in convenience and versatility.Widely applied in joint surgery, trauma surgery, neurosurgery, thoracic surgery.This medical multifunction drill saw includes various drills and saws, along with a wide selection of attachments.',
        _id: 1,
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/categoriesImage/basic-instruments.png`,        
        title: "Basic Instruments",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repudiandae qui architecto quas, illo nemo! Eos temporibus velit quos nostrum natus quis inventore? Pariatur illo quae consequatur non voluptate fuga.',
        _id: 2,
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/categoriesImage/plates.png`,        
        title: "Plates",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repudiandae qui architecto quas, illo nemo! Eos temporibus velit quos nostrum natus quis inventore? Pariatur illo quae consequatur non voluptate fuga.',
        _id: 3,
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/categoriesImage/screws.png`,        
        title: "Screws",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repudiandae qui architecto quas, illo nemo! Eos temporibus velit quos nostrum natus quis inventore? Pariatur illo quae consequatur non voluptate fuga.',
        _id: 4,
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/categoriesImage/bone-models.png`,
        title: "Bone Models",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis repudiandae qui architecto quas, illo nemo! Eos temporibus velit quos nostrum natus quis inventore? Pariatur illo quae consequatur non voluptate fuga.',
        _id: 5,
      },
    ],
    products: [
      
    ]
  }

  // LIFECYCLE
  
  componentDidMount(){
    this.selectCategory(this.state.categories[0])
    this.fetchProducts(this.state.categories[0]._id)
  }

  // HANDLE CHANGE
  selectCategory = (selectedCategory) => {
    this.fetchProducts(selectedCategory._id)
    this.setState({selectedCategory})
  }
  // ACTION
  redirectToProductDetail = (productId)  => {
    console.log(this)
    this.props.history.push(`/products/${productId}`)
  }

  fetchProducts = async (categoriesId, pages) => {
    const products = await fakeFetch.products(categoriesId, pages);

    this.setState({products})
  }

  // RENDER
  renderCategoryGrid  = () => {
    const { categories } = this.state;
    const { classes } = this.props;
    return(
      <Grid container spacing={2} justify="center">
        {categories.map((el, index) => (
          <Grid
            item
            // xs={1}
            className={classes.categoryBlock}
            key={index}
            onClick={() => this.selectCategory(el)}
          >
            <img className={classes.categoryImage} src={el.imgUrl} alt={el.title}/>
            <h5>{el.title}</h5>
          </Grid>
        ))}
      </Grid>
    )
  }

  renderProductGrid () {
    const { products } = this.state;
    const { classes } = this.props;
    const { redirect } = Helpers;

    return (
      <Grid container spacing={4}>
        {
          products.map((el, index) => {
            const primaryImage = _.result(el, 'productImages[0].imgUrl');
            const primaryAltText = _.result(el, 'productImages[0].altText');
            const parsedDesc = el.description.length > 50 ? el.description.slice(0, 50) + ' ...Read More' : el.description;
            const parsedTitle = el.name.length > 30 ? el.name.slice(0, 30) + ' ...' : el.name;
            return (
              <Grid item key={index} xs={12} sm={3}>
                <Card
                  className={classes.card}
                  onClick={() => {
                    redirect(this, 'products', el._id)
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }}
                >
                  <CardHeader
                    title={parsedTitle}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <img className={classes.productImage} src={primaryImage} alt={primaryAltText}/>
                    <p>{parsedDesc}</p>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    )
  }
  render () {
    const { selectedCategory } = this.state;
    return (
      <div className="custom-container">
        <div className='category-section'>
          <h1 className='colored-text category'>Category</h1>
          {this.renderCategoryGrid()}
        </div>
        <Grid container spacing={5} justify="center">
          {/* {
            Object.keys(selectedCategory).length > 0 && */}
            <Grid item xs={12} sm={4}>
              <h3 className='colored-text'>
                {selectedCategory.title}
              </h3>
              {/* <p>{selectedCategory.description}</p> */}
            </Grid>
          {/* } */}
          <Grid item xs={12} sm={8}>
            {this.renderProductGrid()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Product)