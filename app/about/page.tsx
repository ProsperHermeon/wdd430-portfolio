import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Prosper Opara, a full-stack web development student at BYU-Idaho
        pursuing applied programming through BYU-Pathway. I focus on building
        clean, responsive, and maintainable web applications, and I&apos;m
        working toward a graduate degree in computer science.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">Technical Skills</h3>
      <section className="grid gap-4 md:grid-cols-3">
        <SkillCard
          category="Frontend"
          skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
        />
        <SkillCard
          category="Backend"
          skills={['Node.js', 'Express', 'REST APIs', 'MongoDB']}
        />
        <SkillCard
          category="Tools"
          skills={['Git', 'GitHub', 'VS Code', 'Vercel']}
        />
      </section>
    </main>
  );
}
