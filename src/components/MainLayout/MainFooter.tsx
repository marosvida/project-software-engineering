import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center", marginTop: 50 }}>
      Software engineering project - eCommerce ©2023. Visit{" "}
      <a target="_blank" href="https://github.com/marosvida/se-project">
        Github
      </a>{" "}
      page.
    </Footer>
  );
};

export default MainFooter;
