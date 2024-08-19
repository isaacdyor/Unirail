import { Nav } from "@/components/nav";
import { Onboarding } from "@/components/onboarding";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Nav />
      <Onboarding />
      {children}
    </>
  );
};

export default RootLayout;
