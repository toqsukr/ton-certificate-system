export function getOperationName(source: string) {
  const operationNameMatch = source.match(/query\s+(\w+)/)
  const operationName = operationNameMatch ? operationNameMatch[1] : null

  return operationName
}
export function getMethodName(source: string) {
  const methodNameMatch = source.match(/query\s+\w+\([^)]*\)\s*{\s*\n\s*(\w+)/)
  const methodName = methodNameMatch ? methodNameMatch[1] : null

  return methodName
}
