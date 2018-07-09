import { TOGGLE_ADD_SITE } from "../actions/menu";

export function showAddSite(state = false, action) {
  switch (action.type) {
    case TOGGLE_ADD_SITE:
      return !state;
    default:
      return state;
  }
}
