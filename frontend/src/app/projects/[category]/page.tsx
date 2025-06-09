'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { SharedPageModal } from '@/components/shared';
import { GET_PROJECTS, DELETE_PROJECT, CREATE_PROJECT, EDIT_PROJECT } from '@/graphql';

export default function ProjectsByCategoryPage() {
  const { category } = useParams();

  const readableTitle = (slug: string | string[] | undefined) => {
    if (typeof slug !== 'string') return 'Projects';
    const map: Record<string, string> = {
      'web-development': 'Web Development',
      'data-science': 'Data Science',
      'embedded-systems': 'Embedded Systems',
    };
    return map[slug] || 'Projects';
  };

  return (
    <SharedPageModal
      // GraphQL queries and mutations
      query={GET_PROJECTS}
      createMutation={CREATE_PROJECT}
      editMutation={EDIT_PROJECT}
      deleteMutation={DELETE_PROJECT}

      pageTitle={readableTitle(category)}
      dataKey="getProjects"

      textFields={{
        title: 'title',
        description: 'description',
        tags: 'skills',
        url: 'projectUrl',
      }}

      // Buttons of modification
      formTitle={{ add: 'Add Project', edit: 'Edit Project' }}

      // Form fields for the modal
      formFields={[
        { name: 'title', type: 'text', label: 'Project Title', required: true },
        { name: 'skills', type: 'text', label: 'Skills (comma separated)', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        {
          name: 'category', type: 'select', label: 'Category', required: true,
          options: [
            { label: 'Web Development', value: 'web-development' },
            { label: 'Data Science', value: 'data-science' },
            { label: 'Embedded Systems', value: 'embedded-systems' },
          ]
        },
        { name: 'projectUrl', type: 'text', label: 'Project URL' },
      ]}
    />
  );
}
