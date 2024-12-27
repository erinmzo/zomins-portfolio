interface LabelProps {
  link?: string;
  label: string;
}
function Label({ link, label }: LabelProps) {
  if (link) {
    return (
      <a href={link} className="bg-[#f5f5f5] text-[20px] font-bold py-3 px-4 rounded-lg" target="_blank">
        <span># </span>
        {label}
      </a>
    );
  }
  return (
    <span className="bg-[#f5f5f5] text-[20px] font-bold py-3 px-4 rounded-lg">
      <span># </span>
      {label}
    </span>
  );
}

export default Label;
