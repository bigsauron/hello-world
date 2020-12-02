import {
  _GET_OBJECTS_STARTED,
  _GET_OBJECTS_ENDED,
} from '../reducers/objects';

import { _getObjectsList } from '../../services/services';

export const getObjectsList = (name, path = name, listName = name, path2 = '') => (dispatch, params, queryStrings = {}, xtraPath = '', firstFetch = false) => {
  dispatch({ type: _GET_OBJECTS_STARTED(name), firstFetch });
  let xtrParams = '';
  if (params) {
    if (Array.isArray(params)) {
      xtrParams = `/${params.join('/')}`;
    } else {
      xtrParams = `/${params}`;
    }
  }
  xtraPath = path2 + xtraPath;

  return _getObjectsList(`${path}${xtrParams}${xtraPath}`, queryStrings)
    .then(response => {
      dispatch({
        type: _GET_OBJECTS_ENDED(name),
        list: response[listName],
        pagination: response.pagination,
        error: false
      });
      return response;
    }, error => {
      dispatch({
        type: _GET_OBJECTS_ENDED(name),
        list: [],
        error: true
      });
      throw error;
    });
};
