import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { CodeBlock } from '@/components/ui/code-block';

function getCodeBlockProps(children: any) {
    const codeElement = Array.isArray(children) ? children[0] : children;
    const code = codeElement?.props?.children;
    const className = codeElement?.props?.className ?? '';
    const language = className.replace('language-', '') || undefined;

    return {
        code: typeof code === 'string' ? code : String(code ?? ''),
        language,
    };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children, ...props }: any) => (
            <h1 className="mt-12 mb-4 md:pb-2 text-2xl md:text-3xl font-bold text-left text-slate-800 border-b border-slate-300 font-Noto_Sans_JP" {...props}>
                {children}
            </h1>
        ),
        h2: ({ children, ...props }: any) => (
            <h2 className="mt-8 mb-2 text-xl font-semibold text-left text-slate-800 font-Noto_Sans_JP" {...props}>
                {children}
            </h2>
        ),
        h3: ({ children, ...props }: any) => (
            <h3 className="mt-4 mb-2 text-lg font-semibold text-left text-slate-800 font-Noto_Sans_JP" {...props}>
                {children}
            </h3>
        ),
        p: ({ children, ...props }: any) => (
            <p className="my-2 text-base text-left text-slate-800 font-Noto_Sans_JP" {...props}>
                {children}
            </p>
        ),
        ul: ({ children, ...props }: any) => (
            <ul className="my-2 list-disc list-inside text-base text-slate-800 font-Noto_Sans_JP" {...props}>
                {children}
            </ul>
        ),
        li: ({ children, ...props }: any) => (
            <li className="mb-2 text-base text-slate-800 font-Noto_Sans_JP" {...props}>
                {children}
            </li>
        ),
        img: ({ src, alt, ...props }: any) => (
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                loading="eager"
                quality={50}
                className="max-w-11/12 md:max-w-2/3 h-auto rounded-lg shadow-md my-2 mx-auto block"
                {...props}
            />
        ),
        pre: ({ children, ...props }: any) => {
            const { code, language } = getCodeBlockProps(children);

            return (
                <CodeBlock
                    code={code}
                    language={language}
                    className={props.className}
                />
            );
        },
        code: ({ children, className, ...props }: any) => {
            if (className?.startsWith('language-')) {
                return (
                    <code className={className} {...props}>
                        {children}
                    </code>
                );
            }

            return (
                <code
                    className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800"
                    {...props}
                >
                    {children}
                </code>
            );
        },
        CodeBlock,
        
        ...components,
    };
}
