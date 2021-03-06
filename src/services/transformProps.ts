const snakeCaseRegex = /([a-z])_([a-z])/g
const camelCaseRegex = /([a-z])([A-Z])/g

const deepKeyTransform = (
  object: unknown,
  transform: (src: string) => string,
): unknown => {
  if (!object || typeof object !== 'object') {
    return object
  }

  if (Array.isArray(object)) {
    return object.map((item: unknown) => deepKeyTransform(item, transform))
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      transform(key),
      deepKeyTransform(value, transform),
    ]),
  )
}

const transformToCamel = (source: string) =>
  source.replaceAll(
    snakeCaseRegex,
    (_, gr1: string, gr2: string) => `${gr1}${gr2.toUpperCase()}`,
  )

const transformToSnake = (source: string) =>
  source.replaceAll(
    camelCaseRegex,
    (_, gr1: string, gr2: string) => `${gr1}_${gr2.toLowerCase()}`,
  )

export enum CaseType {
  SNAKE_CASE,
  CAMEL_CASE,
}

// Transform props of object and inner objects to caseType case
export const transformProps = (object: unknown, caseType: CaseType) =>
  deepKeyTransform(
    object,
    caseType === CaseType.SNAKE_CASE ? transformToSnake : transformToCamel,
  )
