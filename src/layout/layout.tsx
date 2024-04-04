import React, { PropsWithChildren } from 'react';

import Header from './components/header'

type Props = {
  children: JSX.Element
}

const PageLayout = (props: PropsWithChildren<Props>) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
