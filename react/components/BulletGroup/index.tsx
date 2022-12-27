import React, { PropsWithChildren } from 'react';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';
import { useListContext } from 'vtex.list-context';
import BulletList from '../modules/BulletList';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext();
  const bulletsList = BulletList(bullets);
  console.log("Bullets", bullets);
  console.log("List", list)
  // console.log("Contents", bulletsContent);

  if (false) {
    children
  }
  return (
    isMobile
      ?
      <div>
        <p>Mobile</p>
        <div>{bulletsList}</div>
      </div>
      :
      <div>
        <p>Desktop</p>
        <div>{bulletsList}</div>
      </div>
  )
}

export default BulletGroup;