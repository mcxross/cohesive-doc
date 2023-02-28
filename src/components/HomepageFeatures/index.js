import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/cohesive.svg').default,
    description: (
      <>
          Cohesive offers effortless Chain Platform development with single instance installation, swift setup, and seamless usage for speedy project deployment.
      </>
    ),
  },
  {
    title: 'Multi Chain Development',
    Svg: require('@site/static/img/cohesive.svg').default,
    description: (
      <>
          Build on multiple blockchain networks simultaneously with ease using Cohesive. Create and deploy projects across multiple chains with unparalleled speed and agility.
      </>
    ),
  },
  {
    title: 'Multiplatform',
    Svg: require('@site/static/img/cohesive.svg').default,
    description: (
      <>
          Experience seamless software development across all platforms with Cohesive. Build and deploy applications for desktop, web, and mobile with ease.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
