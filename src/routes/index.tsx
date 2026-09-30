import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-200 px-6 text-center antialiased">
      <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
        Hello, World!
      </h1>
      <p className="mt-6 text-lg text-slate-500 sm:text-xl">
        Built with React + Vite
      </p>
    </div>
  );
}
