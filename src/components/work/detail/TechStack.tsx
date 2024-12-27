interface TechStackProps {
  techStacks: string[];
}

function TechStack({ techStacks }: TechStackProps) {
  return (
    <div className="mt-[160px]">
      <h3 className="font-bold text-[56px]">TECH STACK</h3>
      <ul>
        {techStacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechStack;
