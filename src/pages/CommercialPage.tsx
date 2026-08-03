import React from 'react';
import { ResidencesGrid } from '../components/ResidencesGrid';
import { Property, ThemeMode } from '../types';

interface CommercialPageProps {
  theme: ThemeMode;
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onRequestBrochure: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({
  theme,
  properties,
  onSelectProperty,
  onRequestBrochure,
  onScheduleVisit,
}) => {
  return (
    <main className="flex-1">
      <ResidencesGrid
        properties={properties}
        theme={theme}
        onSelectProperty={onSelectProperty}
        onRequestBrochure={onRequestBrochure}
        onScheduleVisit={onScheduleVisit}
      />
    </main>
  );
};
