import React from 'react';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles'
import { LinkProps } from '../BulletGroup/BulletTypes';

import './Bullet.css';

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

  const CSS_HANDLES = [
    'bullet__item',
    'bullet__item--title',
    'bullet__item--image',
    'bullet__item--link',
  ];

  const handles = useCssHandles(CSS_HANDLES);
  console.log('Handles: ', handles);

  return (
    <div className={`ma3 pa2 ${handles['bullet__item']}`}>
      <Link
        to={link.url}
        className={handles['bullet__item--link']}
      >
        <img
          src={image}
          alt={title}
          className={handles['bullet__item--image']}
        />
        <p
          className={`ma1 ${handles['bullet__item--title']}`}
        >
          {title}
        </p>
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