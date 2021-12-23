import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/concepts/introduction">
            What is it?
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '4px' }}
            to="/docs/developers">
            For developers
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A cartographer for roleplayers in meta-worlds.">
      <HomepageHeader />
      <main>
        <div>
          <h2>A world map</h2>
          <p>Map roleplaying hubs and events in the world.</p>
        </div>
        <div>
          <h2>Event calendar</h2>
          <p>Manage events accross the world and help organize roleplay.</p>
        </div>
        <div>
          <h2>News management</h2>
          <p>Stay informed about the world activities.</p>
        </div>
        <div>
          <h2>Revive memories</h2>
          <p>Create a timeline of the roleplay events in the coommunity.</p>
        </div>
        <div>
          <h2>Open-ecosystem</h2>
          <p>Designed as API, and open-source. For developers, it means it's easier to develop tools from the same source of data.</p>
        </div>
      </main>
    </Layout>
  );
}
