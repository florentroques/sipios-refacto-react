import DomainFilter2 from './DomainFilter2.component';
import { connect } from 'react-redux'
import { getDomains } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state)
})

export default connect(mapStateToProps)(DomainFilter2)
