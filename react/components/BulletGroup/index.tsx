import React, { PropsWithChildren } from 'react';
import { BulletsSchema } from './BulletTypes';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children,
}: PropsWithChildren<BulletGroupProps>) => {
  console.log(bullets);

  if (false) {
    children
  }
  return (
    <div>Here is a bullet group</div>
  )
}

export default BulletGroup;