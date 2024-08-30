import Layout from "../../Layout/Index";
import { MembersTable } from "./tables";

const PemenangCMS = () => {
  return (
    <Layout>
      <div id="scrollableElement" className="h-screen top-0 ">
        <MembersTable />
      </div>
    </Layout>
  );
};

export default PemenangCMS;
