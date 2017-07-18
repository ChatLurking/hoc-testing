import React, {Component} from 'react';

export default function HoCComp(WrappedComp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        email: '',
        data: {},
      }
      this.setName = this.setName.bind(this);
      this.setEmail = this.setEmail.bind(this);
    }

    componentWillMount() {
      this.setState({
        data: {"setTime": "componenetWillMount"},
      });
    }

    setName(event) {
      this.setState({
        name: event,
      });
    }

    setEmail(event) {
      this.setState({
        email: event,
      });
    }

    render() {
      const functions = {
        setName: this.setName,
        setEmail: this.setEmail,
      }
      return (<WrappedComp inheritedProps={this.state} inheritedFuncs={functions} {...this.props} />)
    }
  }
}
