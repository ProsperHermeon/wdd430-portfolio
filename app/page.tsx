import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'TasteBud',
    description:
      'A recipe discovery web app that lets users browse, search, and filter meals by category, then save favorites for quick access. Built as a data-driven front-end project consuming a live API.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    link: 'https://github.com/ProsperHermeon/tastebud',
  },
  {
    title: 'CoinWatch',
    description:
      'A cryptocurrency tracking app that pulls real-time market data, displays price trends, and lets users watch selected coins. Focused on async data fetching and a responsive dashboard layout.',
    technologies: ['JavaScript', 'CSS', 'REST API', 'Chart.js'],
    link: 'https://github.com/ProsperHermeon/coinwatch',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer building with Next.js, React, and
          TypeScript. Here are some of the projects I&apos;ve recently built.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
