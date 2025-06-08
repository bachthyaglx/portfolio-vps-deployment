// ./src/lib/PrefetchQueries
'use client';

import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import {
  GET_PROJECTS,
  GET_WORK_EXPERIENCES,
  GET_CERTIFICATES,
  GET_EDUCATIONS,
} from '@/graphql';

export default function PrefetchQueries() {
  const client = useApolloClient();

  useEffect(() => {
    const prefetch = async () => {
      await Promise.all([
        client.query({ query: GET_PROJECTS }),
        client.query({ query: GET_WORK_EXPERIENCES }),
        client.query({ query: GET_CERTIFICATES }),
        client.query({ query: GET_EDUCATIONS }),
      ]);
    };

    prefetch();
  }, [client]);

  return null;
}
