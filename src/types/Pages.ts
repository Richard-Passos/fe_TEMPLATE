import DeepPartial from './DeepPartial';
import ErrorPage from './ErrorPage';
import LegalPage from './LegalPage';
import Page from './Page';
import SingleProjectPage from './SingleProjectPage';

type Pages = Page | ErrorPage | DeepPartial<SingleProjectPage> | LegalPage;

export default Pages;
