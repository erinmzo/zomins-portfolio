interface TestAccountProps {
  testId: string | undefined;
  testPw: string | undefined;
  link: string;
}

function TestAccount({ testId, testPw, link }: TestAccountProps) {
  return (
    <div className="flex justify-between my-10 py-8 border-t border-b border-black text-[18px] ">
      {testId && testPw && (
        <div className="flex items-center gap-[140px]">
          <div className="flex itmes-center gap-8">
            <span className="font-bold leading-none">TEST ID</span>
            <span className="leading-none">{testId}</span>
          </div>
          <div className="flex itmes-center gap-8">
            <span className="font-bold leading-none">TEST PW</span>
            <span className="leading-none">{testPw}</span>
          </div>
        </div>
      )}
      <div>
        {link === "" ? (
          <span className="flex items-center font-bold gap-1 leading-none">배포 준비중 입니다.</span>
        ) : (
          <a href={link} target="_blank" className="flex items-center font-bold gap-1 leading-none">
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
