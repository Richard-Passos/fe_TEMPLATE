import pagesApiGet from './get';
import pagesApiGetOne from './getOne';

const pagesApi = {
  get: pagesApiGet,
  getOne: pagesApiGetOne
};

export default pagesApi;
export { pagesApiGet, pagesApiGetOne };
