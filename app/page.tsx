import Card from "@/_components/Card";
import { projects } from "@/_lids/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Reactive Accelerator
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          LWS Assignments
        </h1>
        <p className="mt-3 max-w-xl text-zinc-400">
          All assignments in one place
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </section>
    </main>
  );
}
