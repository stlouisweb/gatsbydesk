import {
  ADD_SITE,
  TOGGLE_ADD_SITE,
  SELECT_ACTIVE_SITE
} from "../actions/sites";

export function sitesList(state = [], action) {
  switch (action.type) {
    case ADD_SITE:
      console.log(action);
      console.log(state);
      return [
        ...state,
        {
          title: action.site,
          id: state.length + 1
        }
      ];
    default:
      return state;
  }
}

export function activeSite(state = 0, action) {
  switch (action.type) {
    case SELECT_ACTIVE_SITE:
      return action.site;
    default:
      return state;
  }
}

export function showAddSite(state = false, action) {
  switch (action.type) {
    case TOGGLE_ADD_SITE:
      return !state;
    default:
      return state;
  }
}
