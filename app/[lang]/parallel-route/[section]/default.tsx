export default function Page({
  params: { lang, section },
}: {
  params: { lang: string; section: string };
}) {
  console.log({ section });

  return (
    <main>
      <p>lang: {lang}</p>
      <p>Section: {section}</p>
    </main>
  );
}
