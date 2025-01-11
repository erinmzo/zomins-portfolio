import TopButton from "@/components/common/button/TopButton";
import Page from "@/components/common/layout/page/Page";
import WorkList from "@/components/work/list/WorkList";

function WorkPage() {
  return (
    <>
      <Page>
        <WorkList />
        <TopButton />
      </Page>
    </>
  );
}

export default WorkPage;
