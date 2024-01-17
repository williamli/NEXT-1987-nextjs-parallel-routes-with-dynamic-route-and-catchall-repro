export default function Page({
  params: { partSlug },
}: {
  params: { partSlug: string };
}) {
  console.log({ partSlug });

  return (
    <main>
      <p>partSlug: {partSlug}</p>
    </main>
  );
}
