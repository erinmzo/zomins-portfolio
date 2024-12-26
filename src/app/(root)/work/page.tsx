import Footer from "@/components/common/layout/footer/Footer";
import Page from "@/components/common/layout/page/Page";
import WorkList from "@/components/work/list/WorkList";

function WorkPage() {
  return (
    <>
      <Page>
        <WorkList />
      </Page>
      <Footer />
    </>
  );
}

export default WorkPage;
