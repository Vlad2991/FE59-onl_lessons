import React from "react";
import { Button } from "../button";
import iamge from "./images/127.jpeg";
import styles from "./styles.scss";

// function nad() {
//   // без use strict this === window
//   // use strict this === undefined
// }

export class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowImage: true };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ isShowImage: !this.state.isShowImage });
  };

  // handleClick() {
  //   console.log("click");
  //   this.setState({ isShowImage: false });
  // }

  render() {
    return (
      <section className="banner">
        <div className="container">
          <div className="banner__wrapper">
            <div className="banner__info">
              <h1 className="banner__title">Hello world</h1>
              <p className="banner__text">Cool!</p>
              <Button
                title="Get it now"
                setIsShowModal={this.props.setIsShowModal}
              />
            </div>
            <div className="banner__img" onClick={this.handleClick}>
              {this.state.isShowImage ? <img src={iamge} alt="" /> : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
