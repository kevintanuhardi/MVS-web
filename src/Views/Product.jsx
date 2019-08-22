import React, { Component } from 'react';
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
import './Product.css'

const styles = {
  card: {
    maxWidth: 345,
    height: 450,
    '&:hover': {
      boxShadow: "0px 4px 5px 6px rgba(0,0,0,0.5), 5px 10px 1px 0px rgba(0,0,0,0.4), 0px 2px 1px -1px rgba(0,0,0,0.35)",
      cursor: "pointer",
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  productImage: {
    maxHeight: "200px",
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
  }
};

class Product extends Component {
  state = {
    categories: [
      {
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        title: "Drill",
        _id: 1,
      },
      {
        imageUrl: "https://5.imimg.com/data5/BM/PA/MY-9082765/bone-implant-instruments-500x500.jpg",
        title: "Instrument",
        _id: 2,
      },
      {
        imageUrl: "https://5.imimg.com/data5/NK/DB/MY-3474863/bone-plate-500x500.jpg",
        title: "Plate",
        _id: 3,
      },
    ],
    products: [
      {
        _id: 1,
        name: "Drill A",
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        category: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio et ab, libero soluta possimus incidunt rerum, repellendus voluptas nostrum culpa, quas ut cum voluptates! Necessitatibus ullam hic ea repellat.",
      },
      {
        _id: 2,
        name: "Drill B",
        imageUrl: "https://sc01.alicdn.com/kf/HTB17hSCATlYBeNjSszcq6zwhFXap/Medical-Surgical-Power-Veterinary-Orthopedic-Drill-And.jpg_350x350.jpg",
        category: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio et ab, libero soluta possimus incidunt rerum, repellendus voluptas nostrum culpa, quas ut cum voluptates! Necessitatibus ullam hic ea repellat.",
      },
      {
        _id: 3,
        name: "Drill C",
        imageUrl: "https://image.made-in-china.com/202f0j00byvEBRNPkduS/Ruijin-Medical-Devices-Electric-Surgical-Bone-Drills-with-Drill-Bits-ND-1001-.jpg",
        category: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio et ab, libero soluta possimus incidunt rerum, repellendus voluptas nostrum culpa, quas ut cum voluptates! Necessitatibus ullam hic ea repellat.",
      },
      {
        _id: 4,
        name: "Drill A",
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        category: 1,
        
      },
      {
        _id: 5,
        name: "Drill A",
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        category: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio et ab, libero soluta possimus incidunt rerum, repellendus voluptas nostrum culpa, quas ut cum voluptates! Necessitatibus ullam hic ea repellat.",
      },
      {
        _id: 6,
        name: "Drill A",
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        category: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio et ab, libero soluta possimus incidunt rerum, repellendus voluptas nostrum culpa, quas ut cum voluptates! Necessitatibus ullam hic ea repellat.",
      },
      {
        _id: 7,
        name: "Drill A",
        imageUrl: "https://www.news-medical.net/image.axd?picture=2013%2F6%2FMCZ-Series_7.JPG",
        category: 1,
      },
    ]
  }

  // ACTION
  redirectToProductDetail = (productId)  => {
    console.log(this)
    this.props.history.push(`/products/${productId}`)
  }

  // RENDER
  renderCategoryGrid  = () => {
    const { categories } = this.state;
    const { classes } = this.props;
    return(
      <Grid container spacing={2} justify="center">
        {categories.map((el, index) => (
          <Grid className={classes.categoryBlock} key={index} item>
            <img className={classes.categoryImage} src={el.imageUrl} alt={el.title}/>
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
      <Grid container spacing={2}>
        {
          products.map((el, index) => (
            <Grid item key={index} xs={6} sm={3}>
              <Card
                className={classes.card}
                onClick={() => redirect(this, 'products', el._id)}
              >
                {/* <CardMedia
                  className={classes.media}
                  image={el.imageUrl}
                  title={el.name}
                /> */}
                <CardHeader
                  title={el.name}
                />
                <CardContent>
                  <img className={classes.productImage} src={el.imageUrl} alt={el.name}/>
                  <p>{el.description}</p>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    )
  }
  render () {
    return (
      <div className="custom-container">
        <h1>Category</h1>
        {this.renderCategoryGrid()}
        <Grid container spacing={5} justify="space-between">
          <Grid item xs={12} sm={4}>
            <h3>
              Category Title
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident ipsam a minima vitae praesentium aut, autem eaque perspiciatis quae libero alias obcaecati et modi eligendi fugiat reiciendis odio illo.</p>
          </Grid>
          <Grid item xs={12} sm={8}>
            {this.renderProductGrid()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Product)