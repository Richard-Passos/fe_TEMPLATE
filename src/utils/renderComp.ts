import { ReactNode } from 'react';

const renderComp = (component: ReactNode, booleans: any[]) =>
  !booleans.map((bool) => !!bool).includes(false) && component;

export default renderComp;
