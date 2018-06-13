import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import PDFJS from 'pdfjs-dist';
import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

import fromPDF from 'Utility/fromPDF';

import Topbar from 'App/Topbar.jsx';
import Form from 'Form/Form.jsx';

const uuid = require('uuid/v4');


class App extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    
  }

  render () {
    return (
      <div className='main-app'>
        <Topbar />
        {
          this.props.forms.length <= 0 ? ''
            : <Form pageIndex={this.props.currentPage} key={this.props.currentPage} />
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentPage: state.global.currentPage,
    forms: state.forms,
  };
};


export default connect(mapStateToProps)(App);
