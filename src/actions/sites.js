const { ipcRenderer } = window.require("electron");

export const ADD_SITE = "ADD_SITE";
export const SELECT_ACTIVE_SITE = "SELECT_ACTIVE_SITE";
export const TOGGLE_ADD_SITE = "TOGGLE_ADD_SITE";

export function addSite(site) {
  return {
    type: ADD_SITE,
    site: site
  };
}

export function toggleAddSite() {
  return { type: TOGGLE_ADD_SITE };
}

export function selectActiveSite(site) {
  return {
    type: SELECT_ACTIVE_SITE,
    site: site
  };
}

export function requestAddSite(site) {
  return dispatch => {
    const newSite = ipcRenderer.sendSync("website:create:request", site);
    console.log(newSite);
    dispatch(addSite(newSite));
  };
}
