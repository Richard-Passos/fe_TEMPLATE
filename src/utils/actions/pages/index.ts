import pagesApiGet from './get';
import pagesApiGetOne from './getOne';
import pagesApiGetSingleProject from './getSingleProject';

const pagesApi = {
  get: pagesApiGet,
  getOne: pagesApiGetOne,
  getSingleProject: pagesApiGetSingleProject
};

export default pagesApi;
export { pagesApiGet, pagesApiGetOne, pagesApiGetSingleProject };
