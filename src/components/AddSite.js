import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import NewSiteForm from "./NewSiteForm";
const AddSite = ({ showAddSite, toggleAddSite }) => {
  let saveFormRef = formRef => {
    this.formRef = formRef;
  };
  return (
    <div>
      <Button type="primary" onClick={toggleAddSite}>
        New Site
      </Button>
      <NewSiteForm
        wrappedComponentRef={saveFormRef}
        visible={showAddSite}
        onCancel={toggleAddSite}
        onCreate={toggleAddSite}
      />
    </div>
  );
};
AddSite.propTypes = {
  showAddSite: PropTypes.bool.isRequired,
  toggleAddSite: PropTypes.func.isRequired
};

export default AddSite;
