import { WorkType } from "@/constants/detail";
import Description from "./Description";
import Feature from "./Feature";
import Links from "./Links";
import TechStack from "./TechStack";
import TestAccount from "./TestAccount";
import Title from "./Title";
import TroubleShooting from "./TroubleShooting";

function Detail({ portfolio }: { portfolio: WorkType }) {
  return (
    <>
      <Title category={portfolio.category} title={portfolio.title} engTitle={portfolio.englishTitle} />
      <TestAccount
        testId={portfolio.testAccount?.id}
        testPw={portfolio.testAccount?.password}
        link={portfolio.siteLink}
      />
      <Description description={portfolio.description} />
      <Feature features={portfolio.features} />
      <TechStack techStacks={portfolio.techStack} techStackImage={portfolio.techStackImage} />
      {portfolio.trobleShooting && <TroubleShooting troubleShooting={portfolio.trobleShooting} />}
      <Links links={portfolio.links} />
    </>
  );
}

export default Detail;
