import React from 'react';

import { Helmet } from 'react-helmet';

// You can add more meta tags as per your project's requirements
interface IProps {
  title: string;
  description?: string;
}

export const Meta: React.FC<IProps> = (props) => {
  const { title, description } = props;
  return (
    <Helmet>
      <title>{`MSR - ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
