import Page from "@/components/common/layout/page/Page";
import Description from "@/components/work/detail/Description";
import DetailWrapper from "@/components/work/detail/DetailWrapper";
import Feature from "@/components/work/detail/Feature";
import TechStack from "@/components/work/detail/TechStack";
import TestAccount from "@/components/work/detail/TestAccount";
import Title from "@/components/work/detail/Title";
import { WORK_DATA, WorkType } from "@/constants/detail";

async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const portfolio = WORK_DATA.find((data) => data.id === Number(id)) as WorkType;
  return (
    <div className="bg-black/50">
      <div className="bg-white relative top-[80px] rounded-tl-[40px] rounded-tr-[40px]">
        <Page>
          <DetailWrapper>
            <Title category={portfolio.category} title={portfolio.title} engTitle={portfolio.englishTitle} />
            <TestAccount
              testId={portfolio.testAccount?.id}
              testPw={portfolio.testAccount?.password}
              link={portfolio.siteLink}
            />
            <Description description={portfolio.description} />
            <Feature features={portfolio.features} />
            <TechStack techStacks={portfolio.techStack} />
          </DetailWrapper>
        </Page>
      </div>
    </div>
  );
}

export default WorkDetailPage;
