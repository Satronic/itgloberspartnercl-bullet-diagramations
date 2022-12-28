import React, { PropsWithChildren } from 'react';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { useCssHandles } from 'vtex.css-handles'
import BulletList from '../modules/BulletList';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];
  const bulletsList = BulletList(bullets);
  const newListContext = list.concat(bulletsList);

  const CSS_HANDLES = [
    'bullet__container'
  ];

  const handles = useCssHandles(CSS_HANDLES);

  return (
    <ListContextProvider list={newListContext}>
      {
        isMobile
          ?
          <div className={`${handles['bullet__container']}`}>{bulletsList}</div>
          :
          <div className='ba'>
            {children}
          </div>
      }
    </ListContextProvider>
  )
}

export default BulletGroup;