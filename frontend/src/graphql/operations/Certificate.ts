import { gql } from '@apollo/client';

export const GET_CERTIFICATES = gql`
  query GetCertificates {
    getCertificates {
      id
      title
      organization
      description
      skills
      dateAchieved
      certificateFileUrl
    }
  }
`;

export const CREATE_CERTIFICATE = gql`
  mutation CreateCertificate($input: CreateCertificateInput!) {
    createCertificate(input: $input) {
      id
      title
      organization
      skills
      description
      dateAchieved
      certificateFileUrl
      createdAt
    }
  }
`;

export const EDIT_CERTIFICATE = gql`
  mutation EditCertificate($id: String!, $input: CreateCertificateInput!) {
    editCertificate(id: $id, input: $input) {
      id
      title
      organization
      skills
      description
      dateAchieved
      certificateFileUrl
      createdAt
    }
  }
`;

export const DELETE_CERTIFICATE = gql`
  mutation DeleteCertificate($id: String!) {
    deleteCertificate(id: $id)
  }
`;
