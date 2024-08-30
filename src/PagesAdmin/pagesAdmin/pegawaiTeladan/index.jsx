import Layout from "../../Layout/Index";

import { TransactionsTable } from "./tables";

const PegawaiTeladanCMS = () => {
  return (
    <Layout>
      <div className="h-screen top-0 overflow-y-auto">
        <TransactionsTable />
      </div>
    </Layout>
  );
};

export default PegawaiTeladanCMS;
