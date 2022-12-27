import React from 'react';
import { LinkProps } from '../BulletGroup/BulletTypes';
import { Link } from 'vtex.render-runtime';

type BulletProps = {
  title: string,
  image: string,
  link: LinkProps
}

const Bullet = ({
  image,
  title,
  link
}: BulletProps) => {
  return (
    <div>
      <Link to={link.url}>
        <img src={image} alt={title} />
        <span>{title}</span>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: 'Bullet',
  type: 'object',
  properties: {
    image: {
      title: 'Bullet Image',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      }
    }
  }
}

export default Bullet;