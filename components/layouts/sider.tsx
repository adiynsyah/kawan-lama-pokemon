
import {
  AppstoreOutlined,
  RocketOutlined
} from '@ant-design/icons'

import styles from '../../styles/sider.module.scss'

import { Layout } from 'antd'
import Link from 'next/link';
const { Sider } = Layout;

export default function SiderComponent() {

  return (
    <Sider className={styles.siderWrapper}>
      <ul className={styles.navWrapper}>
        <li>
          <Link href="/">
            <a>
              <AppstoreOutlined /> Pokemons
            </a>
          </Link>
        </li>
        <li>
          <Link href="/bag">
            <a>
              <RocketOutlined /> Bag
            </a>
          </Link>
        </li>
      </ul>
    </Sider>
  );
}