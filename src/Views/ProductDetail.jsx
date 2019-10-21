import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  Tabs,
  Tab,
  Table,
} from 'react-bootstrap'
import {
  withStyles
} from '@material-ui/core/styles'
import ReactImageMagnify from 'react-image-magnify';
import {withRouter} from 'react-router-dom';

import Helpers from '../helpers/common';
import fakeFetch from '../helpers/fakeFetch';
import './ProductDetail.css';

const styles = {
  tab: {
    marginTop: "10%",
  },
  description: {
    textAlign: 'left',
    margin: '10px 20px'
  },
  tabBody: {
    border: "solid 1px #e9ebee"
  }
}

class ProductDetail extends Component {
  state = {
    //Product Data
    name: "",
    subtitle: "",
    description: "",
    specificationTable: {},
    variances: [
    ],
    productImages: [
    ],
    productStructure: {},
    // Page State
    primaryImage: {
      imgUrl: '',
      altText: ''
    },
    activeTab: "product-specification",
  }

  componentDidMount(){
    const pathArr = this.props.location.pathname.split('/')
    const productId = pathArr[pathArr.length - 1];
    this.fetchProductDetail(productId)
  }

  // HANDLE CHANGE

  setInitialActiveTab = () =>{
    const {description, specificationTable} = this.state
    console.log(description === '', 'desc')
    console.log((Object.keys(specificationTable).length), 'table')
    if(description === '' && !Boolean(Object.keys(specificationTable).length)) {
      this.setState({activeTab: 'product-variances'})
    }
  }

  setPrimaryImage = (selectedImage) => {
    selectedImage = selectedImage ? selectedImage : this.state.productImages[0];
    this.setState({primaryImage: selectedImage})
  }

  // ACTION

  fetchProductDetail = async (productId) => {
    const productDetail = await fakeFetch.productDetail(productId);

    this.setState({...productDetail},
      () => {
        this.setPrimaryImage()
        this.setInitialActiveTab()
      }
    )
  }
  // RENDER
  renderProductImages = () => {
    const { productImages, primaryImage } = this.state;
    const { setPrimaryImage } = this;

    const primaryImageUrl = primaryImage.imgUrl;
    return (
      <div>
        <ReactImageMagnify {...{
          smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: primaryImageUrl,
          },
          largeImage: {
              src: primaryImageUrl,
              width: 1200,
              height: 1800
          },
          imageClassName:"primary-image"
      }} />
        <div id="image-wheel">
          {productImages.map((el) => (
            <img
              src={el.imgUrl}
              className="secondary-image"
              alt={el.altText}
              onClick={() => setPrimaryImage(el)}
            />  
          ))}
        </div>
      </div>
    )
  }


  renderProductTabs = () => {
    const { activeTab, variances, description, specificationTable, productStructure } = this.state;
    const { classes } = this.props;
    const { handleChange } = Helpers;

    const renderSpecificationTable = () => (
      <Table responsive>
        <tbody>
          {Object.keys(specificationTable).map((el, index) => (
            <tr key={index}>
              <th>{el}</th>
              <td>{specificationTable[el]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )

    const renderVariancesTable = () => (
      <Table responsive>
        <tbody>
          {variances.map((el, index) => (
            <tr>
              <td>{el}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )

    const renderProductStructureTable = () => (
      <Table responsive>
        <tbody>
          {Object.keys(productStructure).map((el, index) => (
            <tr key={index}>
              <th>{el}</th>
              <td>{productStructure[el]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )


    return (
      <Tabs id="controlled-tab-example" className={classes.tab} activeKey={activeTab} onSelect={k => handleChange(this, "activeTab", k)} >
        {
          (description !== '' || Boolean(Object.keys(specificationTable).length)) &&
          <Tab className={classes.tabBody} eventKey="product-specification" title="Product Specification">
            {renderSpecificationTable()}
            <p className={classes.description}>{description}</p>
          </Tab>
        }
        {
          Boolean(variances.length) &&
          <Tab className={classes.tabBody} eventKey="product-variances" title="Product Variances">
            {renderVariancesTable()}
          </Tab>
        }
        {
          Boolean(Object.keys(productStructure).length) &&
          <Tab className={classes.tabBody} eventKey="product-structure" title="Product Structure">
            {renderProductStructureTable()}
          </Tab>
        }
      </Tabs>
    )
  }

  render() {
    const { name, subtitle } = this.state;
    const { renderProductTabs } = this;

    return (
      <div className="custom-container product-detail-container">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} >
            {this.renderProductImages()}
          </Grid>
          <Grid item xs={12} sm={8}>
            <div id="title-block">
              <h2>
                {name}
              </h2>
              <h5>{subtitle}</h5>
            </div>
            {renderProductTabs()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ProductDetail));