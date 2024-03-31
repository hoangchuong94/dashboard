import React from 'react';

type PageTitleProps = {
  label: string;
};

export default function PageTitle({ label }: PageTitleProps) {
  return (
    <div className="py-2">
      <h1 className="text-start text-2xl font-bold">{label}</h1>
    </div>
  );
}
