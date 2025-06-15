import { PortableText, PortableTextBlock } from "@portabletext/react";
import React from "react";

type Props = {
  value: PortableTextBlock[]; 
};

const PortableTextWrapper = (props: Props) => {
  return (
    <PortableText
      value={props.value}
      components={{
        block: ({ children }) => <p className="mb-4 text-white">{children}</p>,
        marks: {
          link: ({ children, value }) => {
            const { href } = value as { href: string };
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-light-cyan underline"
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-bold text-light-orange">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-light-cyan">{children}</em>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
          ),
        },
        listItem: ({ children }) => <li className="text-white">{children}</li>,
      }}
    />
  );
};

export default PortableTextWrapper;
