import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Toc from "./Toc";

type PostProps = {
  post: {
    slug: string;
    content: string;
  };
};

export default function Post({ post }: PostProps) {
  return (
    <div className="flex items-stretch gap-6">
      <div className="prose w-full max-w-full flex-1 border-gray-200 lg:border-r lg:pr-20">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
              format: "mdx",
            },
          }}
          components={{
            h2: (props) => (
              <h2 {...props} className="scroll-mt-30 text-2xl font-semibold" />
            ),
            h3: (props) => (
              <h3 {...props} className="scroll-mt-30 text-xl font-semibold" />
            ),
            h4: (props) => (
              <h4 {...props} className="scroll-mt-30 text-[17px] font-medium" />
            ),
            p: (props) => <p {...props} className="mb-[1em] text-base" />,
            a: async (props) => {
              const url = props.href;
              const isExternalUrl = url.startsWith("http");
              if (isExternalUrl) {
                return (
                  <a
                    {...props}
                    className="break-all"
                    data-external
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                );
              }
              return <Link {...props} data-internal />;
            },
          }}
        />
      </div>
      <div className="hidden w-[250px] pl-10 lg:block">
        <div className="sticky top-30 right-0">
          <Toc />
        </div>
      </div>
    </div>
  );
}
