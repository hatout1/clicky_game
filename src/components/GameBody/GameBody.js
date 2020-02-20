import React, { Component } from "react";

import Pictures from "../../pictures.json";
import Images from "../ImagesComponent/Images";

import shuffle from "shuffle-array";

class GameBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 1,
      pictures: Pictures,
      clickedPictures: []
    };
  }

  onClickHandler = e => {
    let id = e.target.id;
    let clicked = false;
    this.state.clickedPictures.forEach(picture => {
      if (picture.id == id) {
        clicked = true;
      }
    });

    if (clicked) {
      console.log(" this image has been clicked !!!");
      this.gameEnd();
    } else {
      this.state.pictures.forEach(picture => {
        if (picture.id == id) {
          this.setState({
            clickedPictures: [...this.state.clickedPictures, picture]
          });
          console.log(this.state.clickedPictures);
          this.incrementScore();
        }
      });
    }

    this.props.updateTopScore(this.state.score);

    this.setState({ pictures: shuffle(this.state.pictures) });
    console.log("change pictures places ");

    console.log(this.state.score);
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });

    console.log("Score: " + this.state.score);

    this.props.updateScore(this.state.score);
  };

  gameEnd = () => {
    this.setState({ score: 1, clickedPictures: [] });
    console.log("GAME OVER");
  };

  render() {
    return (
      <div className="container" id="card-container">
        <div className="row">
          {Pictures.map(picture => (
            <Images
              src={picture.image}
              key={picture.id}
              id={picture.id}
              alt={picture.name}
              onClickHandler={this.onClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GameBody;
