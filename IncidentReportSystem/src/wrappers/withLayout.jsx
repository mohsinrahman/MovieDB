const withLayout = (Component, Layout) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

export default withLayout;
