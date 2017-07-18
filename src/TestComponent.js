import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: '',
    }
  }

  render() {
    console.log(this.props);
    return (
      <div onClick={() => this.props.inheritedFuncs.setName('hi')}>
        yolo
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

TestComponent.propTypes = {
  children: PropTypes.array,
}

export default TestComponent;
