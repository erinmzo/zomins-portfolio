import Page from "../common/layout/page/Page";

function Intro() {
  return (
    <Page>
      <div className="flex flex-col gap-[68px] md:items-center justify-center md:pt-[140px] min-h-screen md:min-h-max">
        <h3 className="text-[24px] md:text-[48px] text-white text-left md:text-center font-semibold">
          <div className="opacity-50">안녕하세요,</div>
          <div className="opacity-100 underline">
            다양한 경험으로 소통하는 개발자
            <br />
            조민수입니다.
          </div>
        </h3>
        <p className="text-white text-left md:text-center text-[20px] md:text-[32px] leading-relaxed font-medium md:w-[85%] md:break-normal">
          디자인과 웹 퍼블리싱 경험을 바탕으로 원활한 협업을 이끌어내는 프론트엔드 개발자입니다. 동료들과의 적극적인
          소통과 지식 공유를 통해 함께 성장하는 개발 문화를 만들어가고자 합니다. 현재는 Next.js와 Tailwind CSS를 활용한
          프론트엔드 개발에 주력하며, 기술적 도전을 통해 성장하는 것을 즐기고 있습니다.
        </p>
      </div>
    </Page>
  );
}

export default Intro;
