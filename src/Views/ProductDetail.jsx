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

import Helpers from '../helpers/common';
import './ProductDetail.css';

const styles = {
  tab: {
    marginTop: "10%",
  }
}

class ProductDetail extends Component {
  state = {
    //Product Data
    name: "CD-6011 Fumigate Orthopedic Drill",
    subtitle: "Ruijin orthopeadic bone drill is also a orthopedic drill system provides stable operation,safe, reliable, save time and effort.This type of bone drill was modified from industrial drill, apply to trauma operation, compact and lightweight making it useful in long operations.Fumigation sterilization of the whole machine (No sterilization under high temperature).Charging time is short.",
    specificationTable: {
      'Model NO.': 'CD-6011',
      Type: 'Awl',
      Application: 'Orthopedic',
      Material: 'Stainless Steel',
      Feature: 'Reusable	Medical Device',
      'Regulatory Type': 'Type 2',
      'Medical devises Reg./Record No.': 'Wsyjxzz2012-2100053',
      Properties: 'Ortho Drill Medical Equipment'
    },
    variances: [
      "Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm",
      "Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm",
      "Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm",
    ],
    productImages: [
      {
        imgUrl: "https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-1.jpg",
        altText: 'drill 1'
      },
      {
        imgUrl: "https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-3.jpg",
        altText: 'drill 1'
      },
      {
        imgUrl: "https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-2.jpg",
        altText: 'drill 1'
      }
    ],
    // Page State
    primaryImage: {},
    activeTab: "product-specification",
  }

  componentDidMount(){
    this.setPrimaryImage()
  }

  // HANDLE CHANGE

  setPrimaryImage = (selectedImage) => {
    selectedImage = selectedImage ? selectedImage : this.state.productImages[0];
    this.setState({primaryImage: selectedImage})
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

  renderSpecificationTable = () => {
    const { specificationTable } = this.state;
    return (
      <Table responsive>
        <tbody>
          {Object.keys(specificationTable).map((el, index) => (
            <tr>
              <th>{el}</th>
              <td>{specificationTable[el]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }


  renderProductTabs = () => {
    const { renderSpecificationTable } = this;
    const { activeTab, variances } = this.state;
    const { classes } = this.props;
    const { handleChange } = Helpers;

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

    return (
      <Tabs id="controlled-tab-example" className={classes.tab} activeKey={activeTab} onSelect={k => handleChange(this, "activeTab", k)} >
        <Tab eventKey="product-specification" title="Product Specification">
          {renderSpecificationTable()}
        </Tab>
        {
          Boolean(variances.length) &&
          <Tab eventKey="product-variances" title="Product Variances">
            {renderVariancesTable()}
          </Tab>
        }
        <Tab eventKey="product-structure" title="Product Structure">
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>
    )
  }

  render() {
    const { name, subtitle } = this.state;
    const { renderProductTabs } = this;

    return (
      <div className="custom-container">
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
            {/* <Card
              className={classes.card}
            >
              <CardHeader
                title="Product Specification"
              />
              <CardContent>
                <Table responsive>
                  <tbody>
                    <tr>
                      <th>Table cell</th>
                      <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quidem vero assumenda repellat quia s</td>
                    </tr>
                    <tr>
                      <th>Table cell</th>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <th>Table cell</th>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </CardContent>
            </Card> */}
            {renderProductTabs()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);