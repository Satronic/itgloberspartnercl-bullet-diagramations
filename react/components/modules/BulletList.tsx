import React from 'react';
import { BulletsSchema, LinkProps } from '../BulletGroup/BulletTypes';
import Bullet from './Bullet';

type BulletProps = {
  bulletTitle: string,
  bulletImage: string,
  link: LinkProps
}

const BulletList = (
  bullets: BulletsSchema
) => {
  return (

    bullets.map((bullet: BulletProps, index: number) => {
      return (
        <Bullet
          key={index}
          image={bullet.bulletImage}
          title={bullet.bulletTitle}
          link={
            bullet.link
            ?
              bullet.link
            :
            {
              url: "/",
              attributeNofollow: false,
              attributeTitle: "",
              openNewTab: false,
              newTab: false
            }
          }
        />
      )
    })

  )
}

export default BulletList;