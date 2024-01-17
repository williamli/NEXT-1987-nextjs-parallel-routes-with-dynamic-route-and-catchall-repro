export default function Layout({
  children,
  part,
}: {
  children: React.ReactNode;
  part: React.ReactNode;
}) {
  return (
    <section className="flex w-full space-x-2 mx-auto">
      <section className="bg-red-800">{children}</section>
      <section className="bg-yellow-700">{part}</section>
    </section>
  );
}
