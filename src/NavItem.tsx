export default function NavItem({ name }: { name: string }) {
  return (
    <div
      className="
        text-2xl text-center
        transition ease-in-out delay-0 hover:text-zinc-300
      "
    >
      {name}
    </div>
  );
}
