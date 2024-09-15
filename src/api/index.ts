import footerApi from './footer';
import headerApi from './header';
import pagesApi from './pages';
import personalApi from './personal';
import projectsApi from './projects';
import servicesApi from './services';
import skillsApi from './skills';
import statisticsApi from './statistics';
import valuesApi from './values';

const api = {
  footer: footerApi,
  header: headerApi,
  pages: pagesApi,
  personal: personalApi,
  projects: projectsApi,
  services: servicesApi,
  skills: skillsApi,
  statistics: statisticsApi,
  values: valuesApi
};

export default api;
export {
  footerApi,
  headerApi,
  pagesApi,
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi
};
