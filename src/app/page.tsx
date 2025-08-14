import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { Icon } from "@/components/primitives/icon";
import { CheckboxShowcase } from "./checkbox-showcase";

export default async function Home() {
  const linkIcon = await Icon({ name: "link" });
  const boltIcon = await Icon({ name: "bolt-filled" });

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      <h1>Button Component Showcase</h1>
      
      <section style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h2>Primary</h2>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </section>

      <section style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h2>Secondary</h2>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <h2>Inputs</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Input placeholder="Enter your email" />
          <Input label="Email" placeholder="name@example.com" />
          <Input label="With icons" placeholder="Search..." iconLeft={linkIcon} iconRight={boltIcon} />
          <Input label="Disabled" placeholder="Can't type here" disabled />
        </div>
      </section>

      <CheckboxShowcase />
    </main>
  );
}
