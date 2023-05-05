import { Layout } from 'antd';
import styles from './index.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Layout.Footer className={styles.root}>
      <span>{year} © Nuclear Reactions Video</span>
      );
    </Layout.Footer>
  );
};
export default Footer;
