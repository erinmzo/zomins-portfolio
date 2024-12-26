import Page from "@/components/common/layout/page/Page";
import DetailWrapper from "@/components/work/detail/DetailWrapper";
import Title from "@/components/work/detail/Title";
import { WORK_DATA, WorkType } from "@/constants/portfoilos";

async function WorkDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const portfolio = WORK_DATA.find((data) => data.id === Number(id)) as WorkType;
  return (
    <div className="bg-black/50">
      <div className="bg-white relative top-[80px] rounded-tl-[40px] rounded-tr-[40px]">
        <Page>
          <DetailWrapper>
            <Title category={portfolio.category} title={portfolio.title} engTitle={portfolio.englishTitle} />
          </DetailWrapper>
        </Page>
      </div>
    </div>
  );
}

export default WorkDetailPage;
