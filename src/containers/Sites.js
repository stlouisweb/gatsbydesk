import { connect } from "react-redux";
import { addSite, toggleAddSite, selectActiveSite } from "../actions/sites";
import SitesList from "../components/SitesList";

const mapStateToProps = state => {
  return {
    showAddSite: state.showAddSite,
    sites: state.sitesList,
    activeSite: state.activeSite
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addSite: site => {
      dispatch(addSite(site));
    },
    toggleAddSite: () => {
      dispatch(toggleAddSite());
    },
    selectActiveSite: site => {
      dispatch(selectActiveSite(site));
    }
  };
};
const Sites = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitesList);
export default Sites;
