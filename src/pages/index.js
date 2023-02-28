import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CohesiveLogo from '@site/static/img/cohesive.svg';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                <CohesiveLogo title="Cohesive logo" className={clsx(styles.logo, styles.spin)}/>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="A Multiplatform Platform for Building Blockchain tools.">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
