export default function Page({
  params: { section },
}: {
  params: { section: string };
}) {
  console.log({ section });

  return (
    <main>
      <p>Section: {section}</p>
    </main>
  );
}
