interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded shadow-sm">
      <h3 className="text-lg font-bold mb-3 text-blue-700">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
