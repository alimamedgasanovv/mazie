import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { Icon } from "@/components/primitives/icon";
import { RequirementBadge } from "@/components/primitives/requirement-badge";
import { PasswordChecklist } from "@/components/primitives/password-checklist";
import { PasswordInput } from "@/components/primitives/password-input";
import { CheckboxShowcase } from "./checkbox-showcase";

export default async function Home() {
  const linkIcon = await Icon({ name: "link" });
  const boltIcon = await Icon({ name: "bolt-filled" });
  const warningIcon = await Icon({ name: "warning" });
  const checkIcon = await Icon({ name: "check" });
  const minusIcon = await Icon({ name: "minus" });

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
          <Input label="Error state" placeholder="Invalid input" error="This field is required" errorIcon={warningIcon} />
          <Input label="Error with icons" placeholder="Search..." iconLeft={linkIcon} iconRight={boltIcon} error="Something went wrong" errorIcon={warningIcon} />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <h2>Requirement Badges</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <RequirementBadge 
            label="8+ characters"
            isValid={false}
          />
          <RequirementBadge 
            label="Contains number"
            isValid={true}
          />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <h2>Password Checklist</h2>
        <PasswordChecklist 
          password="Test123!"
          onValidationChange={(isValid) => console.log('Password valid:', isValid)}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <h2>Password Input</h2>
        <PasswordInput 
          label="Password"
          placeholder="Enter your password"
          lockIcon={await Icon({ name: 'lock-filled' })}
          eyeIcon={await Icon({ name: 'eye' })}
          eyeSlashIcon={await Icon({ name: 'eye-slash' })}
        />
      </section>

      <CheckboxShowcase />
    </main>
  );
}
