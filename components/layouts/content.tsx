import { Layout } from 'antd'
const { Content } = Layout;


export default function ContentComponent(pageProps: any) {

  return (
    <Content className="contentWrapper">
      {...pageProps}
    </Content>
  );
}