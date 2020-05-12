import React, {Component} from 'react';
import NofiticationPresenter from './NotificationPresenter';

class NotificationContainer extends Component {
  static propTypes = {};
  state = {};
  render(){
    return <NofiticationPresenter {...this.props} {...this.state} />
  }
}

export default NotificationContainer