import {
  _OBJECT_GET_ENDED,
  _OBJECT_GET_STARTED,
  _OBJECT_UPDATE_ENDED,
  _OBJECT_UPDATE_STARTED,
  _OBJECT_SET,
  _OBJECT_RESET,
} from '../reducers/object';
import { _getObject, _postObject } from '../../services/services';

/**
 * Get an Object
 * @param {string} name 
 * @param {string} path 
 */
export const getObject = (name, path = name, path2 = '') => (dispatch, params, queryStrings = {}, xtraPath = '', firstFetch = false) => {
  dispatch({ type: _OBJECT_GET_STARTED(name), firstFetch });
  let xtrParams = '';
  if (params) {
    if (Array.isArray(params)) {
      xtrParams = `/${params.join('/')}`;
    } else {
      xtrParams = `/${params}`;
    }
  }
  xtraPath = path2 + xtraPath;
  return _getObject(`${path}${xtrParams}${xtraPath}`, queryStrings)
    .then(response => {
      dispatch({
        type: _OBJECT_GET_ENDED(name),
        data: response,
        error: false
      });
      return response;
    }, error => {
      dispatch({
        type: _OBJECT_GET_ENDED(name),
        data: {},
        error: true
      });
      throw error;
    });
};

/**
 * Post object
 * @param {string} name 
 * @param {string} path 
 */
export const postObject = (name, path = name, path2 = '') => (dispatch, data, params, quertStrings = {}, xtraPath = '') => {
  dispatch({ type: _OBJECT_UPDATE_STARTED(name) });

  let xtrParams = '';
  if (params) {
    if (Array.isArray(params)) {
      xtrParams = `/${params.join('/')}`;
    } else {
      xtrParams = `/${params}`;
    }
  }
  xtraPath = path2 + xtraPath;
  return _postObject(`${path}${xtrParams}${xtraPath}`, data, quertStrings)
    .then(response => {
      dispatch({
        type: _OBJECT_UPDATE_ENDED(name),
        data: response,
        error: false
      });
      return response;
    }, error => {
      dispatch({
        type: _OBJECT_UPDATE_ENDED(name),
        data: {},
        error: true
      });
      throw error;
    });
};

/**
 * set object
 * @param {string} name 
 */
export const setObject = (name) => (dispatch, data) => {
  dispatch({ type: _OBJECT_SET(name), data });
};

export const resetObject = (name) => (dispatch) => {
  dispatch({ type: _OBJECT_RESET(name) });
};
