interface LabelProps {
  link?: string;
  label: string;
}
function Label({ link, label }: LabelProps) {
  if (link) {
    return (
      <a
        href={link}
        className="bg-[#f5f5f5] text-[14px] md:text-[20px] font-bold py-2 px-2 md:py-3 md:px-4 rounded-lg"
        target="_blank"
      >
        <span># </span>
        {label}
      </a>
    );
  }
  return (
    <span className="bg-[#f5f5f5] text-[14px] md:text-[20px] font-bold py-2 px-2 md:py-3 md:px-4 rounded-lg">
      <span># </span>
      {label}
    </span>
  );
}

export default Label;
