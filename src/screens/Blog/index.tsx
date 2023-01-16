import React, { useMemo } from 'react';

import { AdaptiveContainer, SizedBox } from 'components';
import { BlogCard } from './components';
import { BlogCardContainer } from './styles';

const BlogScreen = () => {
  const contentList = useMemo(
    () => [
      {
        title: 'Consectetur adipiscing elit',
        label:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
        thumbnail:
          'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Et dolore magna',
        label:
          'Egestas fringilla phasellus faucibus scelerisque eleifend donec. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Aenean pharetra magna ac placerat vestibulum lectus.',
        thumbnail:
          'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Laoreet id donec ultrices',
        label:
          'Egestas fringilla phasellus faucibus scelerisque eleifend donec.Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.',
        thumbnail:
          'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
    [],
  );

  return (
    <AdaptiveContainer>
      <SizedBox height="large" />

      {contentList.map((item, index) => (
        <BlogCardContainer key={index}>
          <BlogCard
            title={item?.title}
            label={item?.label}
            thumbnail={item?.thumbnail}
          />
          <SizedBox height="large" />
        </BlogCardContainer>
      ))}
    </AdaptiveContainer>
  );
};

export default BlogScreen;
