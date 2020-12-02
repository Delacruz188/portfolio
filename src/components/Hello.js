import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <h1 className="display-4">Hello, my friend! My name is Carlos De la Cruz</h1>
                    <h3 className="lead">I'm a guy who is interested in work and learn about the tech industry. I'm student of the UTM in Merida, Yucatan in Mexico. I can talk in english and spanish. I'm looking for personal growth working in a brand with a real team and be part of different projects which will help me to be a better developer.</h3>
                </div>
                <div className="col-md-12 col-lg-3 col-xl-3">
                    <img src="https://i.imgur.com/k6a4alq.png"  className="img-fluid" alt="ownPhoto"></img>
                </div>
            </div>
        </div>
    );
  }
}
