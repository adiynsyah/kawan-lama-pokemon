import Image from 'next/image'
import { Layout } from 'antd'
import styles from '../../styles/header.module.scss';

const { Header } = Layout;

export default function HeaderComponent() {

  return (
    <Header className={styles.headerWrapper}>
      <Image src="/logo.svg" alt="Pokemin Logo"  width="50" height="50"/>
    </Header>
  );
}