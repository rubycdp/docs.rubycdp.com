import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'High-level gem to control Chrome in Ruby',
    Svg: require('@site/static/img/ferrum.svg').default,
    description: (
      <>
        High-level Ruby API to control Chrome.
        No Selenium/WebDriver/ChromeDriver dependency required.
      </>
    ),
  },
  {
    title: 'Headless Chrome driver for Capybara',
    Svg: require('@site/static/img/cuprite.svg').default,
    description: (
      <>
        Run Capybara tests on a headless Chrome or Chromium using Ferrum.
      </>
    ),
  },
  {
    title: 'High-level web crawling framework',
    Svg: require('@site/static/img/vessel.svg').default,
    description: (
      <>
        Perfect for web scraping. High-level web crawling framework based on Ferrum for extracting the data from websites.
        Use it for data mining, monitoring or historical archival.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
