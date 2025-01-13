/**
 * Formatting helpers for MDX Provider
 */
import { MDXProvider } from "@mdx-js/react";
//
//
type Components = Parameters<typeof MDXProvider>[0]["components"];

const MDXComponents: Components = {
  h1: (props) => (
    <h1
      className="mb-6 text-3xl text-neutral-800 dark:text-gray-200"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-2 mt-6 font-bold text-2xl text-neutral-800 dark:text-gray-200"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-2 mt-6 font-bold text-xl text-neutral-800 dark:text-gray-200"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mb-2 mt-6 font-bold text-xl text-neutral-800 dark:text-gray-200"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary underline hover:no-underline underline-offset-2"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-8 list-inside list-disc" {...props} />,
  ol: (props) => <ol className="mb-8 list-inside list-decimal" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l italic opacity-70 pl-4 text-neutral-800 dark:text-gray-200"
      {...props}
    />
  ),
};

export { MDXComponents };
