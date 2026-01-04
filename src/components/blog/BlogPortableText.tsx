import { PortableText, PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import React from "react";

type Props = {
  value: PortableTextBlock[];
};

const BlogPortableText = (props: Props) => {
  return (
    <PortableText
      value={props.value}
      components={{
        block: {
          normal: ({ children }) => (
            <p className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
              {children}
            </p>
          ),
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold font-josefin text-gray-900 dark:text-white mb-8 mt-12">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold font-josefin text-gray-900 dark:text-white mb-6 mt-10">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold font-josefin text-gray-900 dark:text-white mb-4 mt-8">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold font-josefin text-gray-900 dark:text-white mb-4 mt-6">
              {children}
            </h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cyan-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 py-4 rounded-r-lg">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li className="ml-4">{children}</li>,
          number: ({ children }) => <li className="ml-4">{children}</li>,
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-white">
              {children}
            </strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          link: ({ children, value }) => (
            <a
              href={value?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline transition-colors"
            >
              {children}
            </a>
          ),
        },
        types: {
          image: ({ value }) => (
            <div className="my-8">
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={value.asset.url}
                  alt={value.alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
              {value.caption && (
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                  {value.caption}
                </p>
              )}
            </div>
          ),
          code: ({ value }) => (
            <div className="my-6">
              {value.filename && (
                <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono rounded-t-lg border-b border-gray-600">
                  {value.filename}
                </div>
              )}
              <pre
                className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm font-mono ${value.filename ? "rounded-b-lg" : "rounded-lg"}`}
              >
                <code className={`language-${value.language || "text"}`}>
                  {value.code}
                </code>
              </pre>
            </div>
          ),
        },
      }}
    />
  );
};

export default BlogPortableText;
