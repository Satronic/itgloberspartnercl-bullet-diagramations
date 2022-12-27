import React from 'react';
import { BulletsSchema } from '../BulletGroup/BulletTypes';

type Bullet = {
  bulletTitle: string,
  image: string
}

const BulletList = (
  bullets: BulletsSchema
) => {
  return (
    <div>
      {bullets.map((bullet: Bullet, index) => {
        return (
          <div key={index}>
            <p>{bullet.image}</p>
            <p>{bullet.bulletTitle}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BulletList;