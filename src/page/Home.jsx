import React from "react";
import Input from "../component/Input";
import List from "../component/List";

function Home() {
  return (
    <>
      <Input />
      <List isDone={false} />
      <List isDone={true} />
    </>
  );
}

export default Home;
