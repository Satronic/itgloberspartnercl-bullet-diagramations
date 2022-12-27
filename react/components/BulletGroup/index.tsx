import React, { PropsWithChildren } from 'react';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  console.log(bullets);

  if (false) {
    children
  }
  return (
    isMobile
    ?
      <div>Here is a bullet group in mobile view</div>
    :
      <div>Here is a bullet group in desktop view</div>
  )
}

export default BulletGroup;