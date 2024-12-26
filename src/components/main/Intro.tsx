import Page from "../common/layout/page/Page";

function Intro() {
  return (
    <Page>
      <div className="flex flex-col gap-[68px] items-center justify-center pt-[140px]">
        <h3 className="text-[48px] text-white text-center font-semibold">
          <div className="opacity-50">안녕하세요,</div>
          <div className="opacity-100 underline">
            다양한 경험으로 소통하는 개발자
            <br />
            조민수입니다.
          </div>
        </h3>
        <p className="text-white text-center text-[32px] leading-relaxed font-medium">
          디자인과 웹 퍼블리싱 경험을 통해 사용자 경험과 인터페이스의 중요성을 깊이
          <br />
          이해하게 되었고, 이를 기반으로 직관적이고 사용하기 편리한 웹 애플리케이션을
          <br />
          개발하는 데 집중하고 있습니다. 현재는 Next와 Tailwind를 활용한 프론트엔드
          <br />
          개발에 주력하며, 기술적 도전을 통해 성장하는 것을 즐기고 있습니다.
        </p>
      </div>
    </Page>
  );
}

export default Intro;
