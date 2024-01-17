export default function Page({
  params: { lang, slug },
}: {
  params: { slug: string[] | string; lang: string };
}) {
  console.log({ slug });
  const path = `/${slug ? (Array.isArray(slug) ? slug.join('/') : slug) : ''}`;

  return (
    <main>
      <p>lang: {lang}</p>
      <p>Slug: {path}</p>
    </main>
  );
}
