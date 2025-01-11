interface TestAccountProps {
  testId: string | undefined;
  testPw: string | undefined;
  link: string;
}

function TestAccount({ testId, testPw, link }: TestAccountProps) {
  return (
    <div className="mb-[40px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between my-5 md:my-0 py-5 md:py-8 border-t border-b border-black text-[18px] gap-4 md:gap-0">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-32 md:gap-y-[28px] w-full max-w-3xl">
          <div className="flex gap-8">
            <span className="w-20 font-bold">작업기간</span>
            <span>작성중</span>
          </div>
          <div className="flex gap-8">
            <span className="w-20 font-bold">기여도</span>
            <span>50%</span>
          </div>
          <div className="flex gap-8">
            <span className="w-20 font-bold">TEST ID</span>
            <span>{testId}</span>
          </div>
          <div className="flex gap-8">
            <span className="w-20 font-bold">TEST PW</span>
            <span>{testPw}</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-4">
          <div className="flex flex-col gap-4 text-[12px]">
            <div className="grid grid-cols-[80px_1fr] gap-8">
              <span className="font-bold leading-none">작업기간</span>
              <span className="leading-none">작성중</span>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-8">
              <span className="font-bold leading-none">기여도</span>
              <span className="leading-none">50%</span>
            </div>
          </div>
          {testId && testPw && (
            <div className="flex flex-col gap-4 text-[12px]">
              <div className="grid grid-cols-[80px_1fr] gap-8">
                <span className="font-bold leading-none">TEST ID</span>
                <span className="leading-none">{testId}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-8">
                <span className="font-bold leading-none">TEST PW</span>
                <span className="leading-none">{testPw}</span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Visit Site Link */}
        <div className="hidden md:block">
          {link === "" ? (
            <span className="font-bold leading-none">배포 준비중 입니다.</span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-bold gap-1 leading-none"
            >
              VISIT SITE
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7.84091L1 15" stroke="black" strokeWidth="2" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Mobile Visit Site Button */}
      <div className="md:hidden bg-[#f5f5f5] rounded-[12px] py-4 w-full text-center">
        {link === "" ? (
          <span className="font-bold leading-none opacity-55">배포 준비중 입니다.</span>
        ) : (
          <a href={link} target="_blank" className="flex items-center justify-center font-bold gap-1 leading-none">
            VISIT SITE
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7.84091L1 15" stroke="black" strokeWidth="2" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default TestAccount;
