import makeAction from '../redux/actions/makeAction';
import actionTypes from '../redux/actionTypes';
import { connect } from 'react-redux';
import ListItem from '../components/LeftMenu/ListItem/ListItem'

const mapDispatchToProps = {
    changePage: makeAction(actionTypes.CHANGE_ACTIVE_PAGE)
}

export default connect(undefined, mapDispatchToProps)(ListItem)