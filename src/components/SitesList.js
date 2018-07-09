import React from "react";
import "./SitesList.css";
const Sites = ({ sites }) => {
  return <ul>{sites.map(site => <li>{site.title}</li>)}</ul>;
};

const AddSiteModal = ({ show, addSite }) => {
  let input;
  return (
    <div className={`add-site ${show ? "show" : "hide"}`}>
      <h2>Add new site</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addSite(input.value);
          input.value = "";
        }}
      >
        <label for="sitename">Site Name:</label>{" "}
        <input
          ref={node => {
            input = node;
          }}
          type="text"
          name="sitename"
          id="sitename"
        />{" "}
        <button type="submit">Create Site</button>
      </form>
    </div>
  );
};

const SitesList = ({
  showAddSite,
  sites,
  activeSite,
  toggleAddSite,
  selectActiveSite,
  addSite
}) => {
  return (
    <div>
      <AddSiteModal show={showAddSite} addSite={addSite} />
      <button onClick={toggleAddSite}>
        {!showAddSite ? "Show" : "Hide"} Add Site
      </button>
      {sites && <Sites sites={sites} />}
    </div>
  );
};

export default SitesList;
