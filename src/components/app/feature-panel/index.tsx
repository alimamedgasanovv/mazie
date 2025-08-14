import * as React from "react";

type FeaturePanelProps = {
  items: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
};

export const FeaturePanel = ({ items }: FeaturePanelProps) => {
  return (
    <section className="container mx-auto py-12">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center text-center p-6 border-hairline rounded-lg"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground tracking-tighter">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
