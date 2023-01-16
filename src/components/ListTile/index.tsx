import React from 'react';

import Props from './types';
import ListTileItem from './ListTileItem';

const ListTile = ({ data }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <ListTileItem
          key={index}
          icon={item?.icon}
          label={item?.label}
          onPress={item?.onPress}
        />
      ))}
    </>
  );
};

export default ListTile;
