import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>{children}</section>
        <nav className=" text-white p-4 m-4 border-yellow-600 rounded-md border-solid border-2">
          <div>
            <h1 className="my-4">Test Cases:</h1>
            <ul className="mt-4 ml-2">
              <li>
                <h2 className="mb-2">Catch-all routes [[...slug]]</h2>
                <ul className="ml-4 underline text-blue-600">
                  <li>
                    <Link href="/">✅ Home</Link>
                  </li>
                  <li>
                    <Link href="/article/some-article-name/ac-1240123">
                      ✅ /article/some-article-name/ac-1240123
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="mb-2">Parallel routes</h2>
                <ul className="ml-4 underline text-blue-600">
                  <li>
                    <Link href="/parallel-route/section-name-a">
                      ✅ Just Default A (/parallel-route/section-name-a)
                    </Link>
                  </li>
                  <li>
                    <Link href="/parallel-route/section-name-b">
                      ✅ Just Default B (/parallel-route/section-name-b)
                    </Link>
                  </li>
                  <li>
                    <Link href="/parallel-route/section-name-a/part-name-a">
                      ✅ Default A + slot:part A
                      (/parallel-route/section-name-a/part-name-a)
                    </Link>
                  </li>
                  <li>
                    <Link href="/parallel-route/section-name-a/part-name-b">
                      ✅ Default A + slot:part B
                      (/parallel-route/section-name-a/part-name-b)
                    </Link>
                  </li>
                  <li>
                    <Link href="/parallel-route/section-name-b/part-name-c">
                      ✅ Default B + slot:part C
                      (/parallel-route/section-name-b/part-name-c)
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </body>
    </html>
  );
}
