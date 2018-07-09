import { connect } from "react-redux";
import { toggleAddSite } from "../actions/menu";
import AddSite from "../components/AddSite";
const mapStateToProps = state => {
  return {
    showAddSite: state.showAddSite
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleAddSite: () => {
      dispatch(toggleAddSite());
    }
  };
};
const AddSiteToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSite);
export default AddSiteToggle;
