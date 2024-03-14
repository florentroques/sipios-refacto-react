import React from 'react';

import { State, Props } from '../common/types';
import { initializeState}  from '../common/initializeState';
import { renderSelects } from '../common/renderSelects';

class DomainFilter extends React.Component<Props, State> {
  componentDidMount() {
    this.setState(initializeState(this.props.domains))
  }

  render() {
    return renderSelects(this.state);
  }
}

export default DomainFilter
