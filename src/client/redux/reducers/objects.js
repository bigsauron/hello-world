export const _GET_OBJECTS_STARTED = (name) => name + 'objects/_GET_OBJECTS_STARTED';
export const _GET_OBJECTS_ENDED = (name) => name + 'objects/_GET_OBJECTS_ENDED';
export const _POST_OBJECTS_STARTED = (name) => name + 'objects/_POST_OBJECTS_STARTED';
export const _POST_OBJECTS_ENDED = (name) => name + 'objects/_POST_OBJECTS_ENDED';
export const _REMOVE_FROM_LIST = (name) => name + 'objects/_REMOVE_FROM_LIST';
export const _ADD_TO_LIST = (name) => name + 'objects/_ADD_TO_LIST';
export const _RESET_LIST = (name) => name + 'objects/_RESET_LIST';

const initialState = {
  items: [],
  pagination: {},
  error: false,
  inprogress: false,
  initialLoading: false,
};

const lookupReducer = (name) => (state = initialState, action) => {
  switch (action.type) {
    case _GET_OBJECTS_STARTED(name):
      return {
        ...state,
        // items: [],
        pagination: {},
        error: false,
        inprogress: true,
        initialLoading: action.firstFetch,
      };
    case _GET_OBJECTS_ENDED(name):
      return {
        ...state,
        pagination: action.pagination,
        items: action.list || [],
        error: action.error,
        inprogress: false,
        initialLoading: false,
      };
    case _POST_OBJECTS_STARTED(name):
      return {
        ...state,
        pagination: {},
        error: false,
        inprogress: true,
      };
    case _POST_OBJECTS_ENDED(name):
      return {
        ...state,
        pagination: action.pagination,
        error: action.error,
        inprogress: false,
      };
    case _REMOVE_FROM_LIST(name): {
      const { index } = action;
      const { items: itemsOld } = state;
      const items = itemsOld.slice(0);
      items.splice(index, 1);
      return {
        ...state,
        items,
      };
    }
    case _ADD_TO_LIST(name): {
      const { index, task } = action;
      const { items: itemsOld } = state;
      const items = itemsOld.slice(0);
      items.splice(index + 1, 0, task);
      return {
        ...state,
        items,
      };
    }
    case _RESET_LIST(name): {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

export default lookupReducer;

