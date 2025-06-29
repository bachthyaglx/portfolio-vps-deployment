// src/app/education/page.tsx
'use client';

import { SharedPageModal } from '@/components/shared';
import {
  GET_EDUCATIONS,
  DELETE_EDUCATION,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  SINGLE_UPLOAD,
  DELETE_FILE_FROM_S3,
} from '@/graphql';

export default function ExperiencePage() {
  return (
    <SharedPageModal
      // GraphQL queries and mutations
      query={GET_EDUCATIONS}
      deleteMutation={DELETE_EDUCATION}
      createMutation={CREATE_EDUCATION}
      editMutation={EDIT_EDUCATION}
      uploadFileMutation={SINGLE_UPLOAD}
      deleteFileMutation={DELETE_FILE_FROM_S3}

      // Page title and data key
      pageTitle="Educations"
      dataKey="getEducations"

      // Text fields for displaying data
      textFields={{
        title: 'degree',
        program: 'program',
        subtitle: 'school',
        tags: 'skills',
        description: 'description',
        start: 'startDate',
        end: 'endDate',
      }}

      // File fields for uploading files
      formTitle={{ add: 'Add Education', edit: 'Edit Education' }}

      // Form fields for the modal
      formFields={[
        { name: 'degree', type: 'text', label: 'Degree', required: true },
        { name: 'program', type: 'text', label: 'Program', required: true },
        { name: 'school', type: 'text', label: 'School' },
        { name: 'skills', type: 'text', label: 'Skills', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'startDate', type: 'date', label: 'Date started', required: true },
        { name: 'endDate', type: 'date', label: 'Date ended' },
      ]}

      // File fields for uploading files
      fileFields={[
        { name: 'degreeFileUrl', label: 'Degree File', mode: 'singleupload', display: 'file' },
        { name: 'transcriptFileUrl', label: 'Transcript File', mode: 'singleupload', display: 'file' },
        { name: 'enrollmentFileUrl', label: 'Enrollment File', mode: 'singleupload', display: 'file' },
      ]}
    />
  );
}
