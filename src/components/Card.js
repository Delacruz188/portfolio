import React, { Component } from 'react';

class Card extends Component {

    
    render() {
        return (
            <div className="card col-sm-12 col-md-9 col-lg-3 col-xl-3 m-3">
              <img src={this.props.src} className="card-img-top img-fluid roundeds mt-3" alt="backendImage"></img>
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                <img src={this.props.logo} className="card-img-top img-fluid ml-2" style={{width:'50px', height: '60px'}} alt="..."></img>
                <img src={this.props.logo2} className="card-img-top img-fluid ml-2" style={{width:'50px', height: '60px'}} alt="..."></img>
                <img src={this.props.logo3} className="card-img-top img-fluid ml-2" style={{width:'50px', height: '60px'}} alt="..."></img>
              </div>
            </div>
        );
    }
}

export default Card;
