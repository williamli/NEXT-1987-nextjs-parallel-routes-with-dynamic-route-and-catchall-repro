export default function Page({
  params: { slug },
}: {
  params: { slug: string[] | string };
}) {
  console.log({ slug });
  const path = `/${slug ? (Array.isArray(slug) ? slug.join('/') : slug) : ''}`;

  return (
    <main>
      <p>Slug: {path}</p>
    </main>
  );
}
