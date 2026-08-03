import React from 'react';
import { Property, ThemeMode } from '../types';
import { ProjectsPage as ProjectsContent } from '../components/ProjectsPage';

interface ProjectsPageProps {
  theme: ThemeMode;
  initialFilter?: 'ongoing' | 'completed' | 'upcoming';
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onRequestBrochure: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  theme,
  initialFilter,
  properties,
  onSelectProperty,
  onRequestBrochure,
  onScheduleVisit,
}) => {
  return (
    <main className="flex-1">
      <ProjectsContent
        theme={theme}
        initialFilter={initialFilter}
        properties={properties}
        onSelectProperty={onSelectProperty}
        onRequestBrochure={onRequestBrochure}
        onScheduleVisit={onScheduleVisit}
      />
    </main>
  );
};
