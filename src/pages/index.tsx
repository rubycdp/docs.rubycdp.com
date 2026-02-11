import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ferrum/introduction">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://github.com/rubycdp/ferrum"
            style={{marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <img src="img/github.svg" alt="GitHub" style={{width: '30px', height: '30px'}} /> Star
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - High-level API to control Chrome in Ruby`}
      description="Ferrum is a high-level API to control Chrome in Ruby.">
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
