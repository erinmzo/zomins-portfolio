interface TestAccountProps {
  testId: string | undefined;
  testPw: string | undefined;
  link: string;
}

function TestAccount({ testId, testPw, link }: TestAccountProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between my-8 md:my-10 py-5 md:py-8 border-t md:border-b border-black text-[18px] gap-4 md:gap-0">
      {testId && testPw && (
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[140px] text-[12px] md:text-base">
          <div className="md:flex md:itmes-center grid grid-cols-[80px_1fr] gap-8">
            <span className="font-bold leading-none">TEST ID</span>
            <span className="leading-none">{testId}</span>
          </div>
          <div className="md:flex md:itmes-center grid grid-cols-[80px_1fr] gap-8">
            <span className="font-bold leading-none">TEST PW</span>
            <span className="leading-none">{testPw}</span>
          </div>
        </div>
      )}
      <div className="hidden md:block">
        {link === "" ? (
          <span className="font-bold leading-none">배포 준비중 입니다.</span>
        ) : (
          <a href={link} target="_blank" className="flex items-center font-bold gap-1 leading-none">
            VISIT SITE
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7.84091L1 15" stroke="black" strokeWidth="2" />
            </svg>
          </a>
        )}
      </div>
      <div className="md:hidden bg-[#f5f5f5] rounded-[12px] py-4 w-full text-center">
        {link === "" ? (
          <span className="font-bold leading-none">배포 준비중 입니다.</span>
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
