import React from "react";

import Board from "components/Board";
import Layout from "components/Layout";
import ControlPanel from "components/ControlPanel";

const App = () => (
  <Layout>
    <Board />
    <ControlPanel />
  </Layout>
);

export default App;
