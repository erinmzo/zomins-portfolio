import Page from "@/components/common/layout/page/Page";
import Detail from "@/components/work/detail/Detail";
import { WORK_DATA, WorkType } from "@/constants/detail";

async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const portfolio = WORK_DATA.find((data) => data.id === Number(id)) as WorkType;

  return (
    <>
      <Page>
        <Detail portfolio={portfolio} />
      </Page>
    </>
  );
}

export default WorkDetailPage;
