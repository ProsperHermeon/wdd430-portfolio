import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CoinWatch',
    description:
      'A cryptocurrency tracking app that pulls live market data, displays price trends, and lets users follow selected coins on a responsive dashboard.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    link: 'https://github.com/ProsperHermeon/coinwatch',
  },
  {
    title: 'ServeConnect',
    description:
      'A full-stack web application that connects community members with local service and volunteer opportunities, built on a Node and Express backend with server-rendered views.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'EJS'],
    link: 'https://github.com/ProsperHermeon/cse340-serveconnect',
  },
  {
    title: 'RecipeFinder',
    description:
      'A recipe search app that lets users find and browse meals by ingredient or keyword, pulling data from a public recipe API.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    link: 'https://github.com/ProsperHermeon/RecipeFinder',
  },
  {
    title: 'ExpenseTracker',
    description:
      'A Python application for logging and categorizing personal expenses, giving users a clear running summary of their spending.',
    technologies: ['Python'],
    link: 'https://github.com/ProsperHermeon/ExpenseTracker',
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
