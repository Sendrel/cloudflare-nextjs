import React from "react";
import NikeCanadaJSON from "../data/Nike_Canada.json";

export async function getServerSideProps(context: any) {
  return {
    props: {
      data: NikeCanadaJSON,
    }, // will be passed to the page component as props
  };
}

const NikeCanada = (props: any) => {
  return (
    <div>
      Nike Canada{" "}
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
};

export default NikeCanada;
