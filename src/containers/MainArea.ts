import { connect } from 'react-redux';
import MainAreaComponent from '../components/MainArea/MainAreaContent';

const mapStateToProps = ({ pageReducer }: any) => ({
  activePage: pageReducer.activePage,
});

export default connect(
  mapStateToProps,
  undefined,
)(MainAreaComponent);
