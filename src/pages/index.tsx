import React from "react";

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => {
  return <div>Home</div>;
};

export default Home;
