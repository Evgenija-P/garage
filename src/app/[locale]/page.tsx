import Title from "@/components/sections/Title";
import Buttons from "@/components/UI/buttons/Buttons";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Buttons category="primary" type="button" styles="mb-20">
        primary
      </Buttons>

      <Buttons category="secondary" type="button" styles="mb-20">
        secondary
      </Buttons>
      <Title tag="h1" textColor="accent" styles="text-center mb-20">
        Hello world accent
      </Title>
    </main>
  );
}
