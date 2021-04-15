import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/projects.module.css';

export default function Projects() {
  return (
    <Layout>
        <div className={styles.portfolio}>
            <h2>portfolio</h2>
            <h3>Projects & Websites</h3>
        </div>
    </Layout>
  );
}