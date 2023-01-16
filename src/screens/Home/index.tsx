import React, { useMemo } from 'react';

import { AdaptiveContainer, SizedBox } from 'components';
import { Content } from './components';

const HomeScreen = () => {
  const contentList = useMemo(
    () => [
      {
        title: 'Who are we?',
        label:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
        lottie: require('assets/lottie/psychotherapy.json'),
      },
      {
        title: 'How it works?',
        label:
          'Egestas fringilla phasellus faucibus scelerisque eleifend donec. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Aenean pharetra magna ac placerat vestibulum lectus.',
        lottie: require('assets/lottie/meditation-2.json'),
      },
      {
        title: 'Frequently Asked Questions',
        label:
          'Egestas fringilla phasellus faucibus scelerisque eleifend donec.Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.',
        lottie: require('assets/lottie/conversation.json'),
      },
    ],
    [],
  );

  return (
    <AdaptiveContainer>
      <SizedBox height="large" />

      {contentList.map((item, index) => (
        <Content
          key={index}
          title={item?.title}
          label={item?.label}
          lottie={item?.lottie}
        />
      ))}
    </AdaptiveContainer>
  );
};

export default HomeScreen;
