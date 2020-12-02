import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container p-4" style={{backgroundColor:'#e9ecef', borderRadius:'10px'}}>
        <div className="row  d-flex justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-90 col-xl-9 ">
            <form action="mailto:delacruzc410@gmail.com" method="post" enctype="text/plain">
              <div className="form-group">
                <label for="inputEmail">Who are you?</label>
                <input type="text" className="form-control" name="inputName" id="inputName" placeholder=" example: John Carter"/>
              </div>
              <div className="form-group">
                <label for="content">Tell me what you need.</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
              </div>
              <button type="submit" className="btn btn-success">Send</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}