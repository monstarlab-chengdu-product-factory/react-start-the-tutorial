import axios from 'axios';

export const FETCH_COLLECTIONS = 'fetch_collections';

const ROOT_URL = 'http://54.238.148.241:2333';

export function fetchCollections() {
  return dispatch => {
    axios
      .get(
        `${ROOT_URL}/admin/news/list?page=0&size=10&sort=userId,desc&id=1&authorName=testName`
      )
      .then(response => {
        dispatch({
          type: FETCH_COLLECTIONS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
