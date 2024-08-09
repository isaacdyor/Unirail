import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className=" gap-lg flex">
      <Logo size="lg" />
      <Logo />
      <Logo size="sm" />
    </div>
  );
}
