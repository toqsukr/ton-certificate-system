import { getMethodName, getOperationName } from './gql'

export async function execute<TResult, TVariables = unknown>(
  query: string,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const operationName = getOperationName(query)
  const response = await fetch(import.meta.env.VITE_GETGEMS_GRAPHQL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
    },
    body: JSON.stringify({
      operationName,
      query,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const methodName = getMethodName(query)

  return response.json().then(({ data }) => (methodName ? data[methodName + ''] : data)) as TResult
}
