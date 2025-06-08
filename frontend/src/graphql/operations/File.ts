import { gql } from '@apollo/client';

export const SINGLE_UPLOAD = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export const MULTI_UPLOAD = gql`
  mutation MultiUpload($files: [Upload!]!) {
    multiUpload(files: $files)
  }
`;

export const DELETE_FILE_FROM_S3 = gql`
  mutation SingleDelete($fileUrl: String!) {
    singleDelete(fileUrl: $fileUrl)
  }
`;
