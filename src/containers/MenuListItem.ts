import { connect } from 'react-redux';
import ListItem from '../components/LeftMenu/ListItem';
import { changePageAction } from '../redux/actions/pageActions';

const mapDispatchToProps = {
  changePage: changePageAction,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(ListItem);
