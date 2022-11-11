import { trpc } from "../server/utils/createTrpcHooks";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen p-4 flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-16 text-6xl">
        This is the <span className="font-bold text-orange-600">DeviStack</span>
      </h1>
      <div className="w-full max-w-6xl flex flex-wrap justify-evenly">
        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-red-500">Next.js</h2>
          <p>
            React framework for CSR, SSR and SSG. Also adds serverless functions
            for backend.
          </p>

          <Link
            href="https://nextjs.org/docs/getting-started"
            className="mt-4 inline-block text-red-500 hover:text-red-800"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-orange-500">Typescript</h2>
          <p>
            JS but better. Especially for apps larger than your todo-list
            prototype.
          </p>
          <Link
            href="https://www.typescriptlang.org/docs/"
            className="mt-4 inline-block text-orange-500 hover:text-orange-700"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-yellow-400">Prisma</h2>
          <p>SQL and NO-SQL ORM with a simple declarative schema language.</p>
          <Link
            href="https://www.typescriptlang.org/docs/"
            className="mt-4 inline-block text-yellow-400 hover:text-yellow-600"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-lime-500">TRPC</h2>
          <p>
            TRPC creates typesafe APIs without the need for a schema like with
            GraphQL.
          </p>
          <Link
            href="https://trpc.io/"
            className="mt-4 inline-block text-lime-500 hover:text-lime-700"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-green-500">Next-auth</h2>
          <p>
            Authentication for Next.js that works by default and is optionally
            configurable.
          </p>
          <Link
            href="https://next-auth.js.org/"
            className="mt-4 inline-block text-green-500 hover:text-green-700"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-teal-500">Strapi CMS</h2>
          <p>Headless CMS that serves your content in JSON on a REST api.</p>
          <Link
            href="https://strapi.io/"
            className="mt-4 inline-block text-teal-500 hover:text-teal-700"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-blue-500">Tailwind</h2>
          <p>Declarative styling framework. Works great for components.</p>
          <Link
            href="https://tailwindcss.com/"
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-indigo-600">Framer motion</h2>
          <p>Animate react elements with ease.</p>
          <Link
            href="https://www.framer.com/motion/"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            Documentation
          </Link>
        </div>

        <div className="w-80 m-4 p-4 border border-zinc-400 rounded-lg">
          <h2 className="mb-4 text-3xl text-fuchsia-500">Vercel & Railway</h2>
          <p>Recommended hosting solutions.</p>
          <Link
            href="https://vercel.com/"
            className="mt-4 block text-fuchsia-500 hover:text-fuchsia-700"
          >
            Vercel
          </Link>
          <Link
            href="https://railway.app/"
            className="mt-1 block text-fuchsia-500 hover:text-fuchsia-700"
          >
            Railway
          </Link>
        </div>
      </div>
    </main>
  );
}
