import React from "react";
import { Button } from "../button";
import iamge from "./images/127.jpeg";
import styles from "./styles.scss";

// function nad() {
//   // без use strict this === window
//   // use strict this === undefined
// }

export class Banner extends React.Component {
  interval;
  callback = () => {
    console.log("body click");
  };

  constructor(props) {
    console.log("constructor - здесь инициилизируется класс");
    super(props);
    this.state = { isShowImage: true, shouldFetchData: false };
    // this.handleClick = this.handleClick.bind(this);
  }

  // static getDerivedStateFromProps(props) {
  //   if (props) {
  //     return {
  //       isShowImage: true,
  //       shouldFetchData: false,
  //     };
  //   }

  //   return null;
  // }

  componentDidMount() {
    //... какой-то код, который выполнится единожды при создании компонента (монтировании)
    // console.log(
    //   "componentDidMount - выполняется один раз и здесь мы ОБЫЧНО делаем запросы на сервак, навешиваем обработчики событий и т.д."
    // );
    // document.body.addEventListener("click", this.callback);
    // this.interval = setInterval(() => {
    //   console.log("ok");
    // }, 1000);
  }

  // shouldComponentUpdate() {
  //   /// что-то подсчитываем и решаем, обновить компонент или нет, возвращает булевое значени
  //   // return true || false;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isShowImage !== this.state.isShowImage) {
      //... выполнить что-то только из-за обновления isShowImage
    }
    // if (!prevState.shouldFetchData && this.state.shouldFetchData) {
    //   fetch("");
    // }
    // console.log(
    //   "componentDidUpdate - выполняется каждый раз когда обновляется стэйт или пропсы",
    //   prevProps,
    //   prevState,
    //   this.state
    // );
  }

  componentDidCatch() {
    // console.log("componentDidCatch - обработка ошибок компонента");
  }

  componentWillUnmount() {
    // console.log(
    //   "componentWillUnmount - выполняется при размонтировании (здесь удаляем таймауты и интервалы, глушем запросы и обрботчики событий)"
    // );

    clearInterval(this.interval);

    document.body.removeEventListener("click", this.callback);
  }

  handleClick = () => {
    this.setState({
      isShowImage: !this.state.isShowImage,
      shouldFetchData: true,
    });
  };

  // handleClick() {
  //   console.log("click");
  //   this.setState({ isShowImage: false });
  // }

  render() {
    // console.log("render - смонтировался/изменился стэйт или пропсы");
    return (
      <section
        className={`banner ${this.props.isBlackTheme ? "banner_black" : ""}`}
      >
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
