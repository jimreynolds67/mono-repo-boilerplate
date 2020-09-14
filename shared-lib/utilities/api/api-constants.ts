export const HEADER_BROWSER_USER_AGENT = "-Browser-User-Agent"
export const HEADER_CONTENT_TYPE = "Content-Type"
export const HEADER_DEVICE_AD_ID = "-Device-Advertising-Id"
export const HEADER_DEVICE_LOCATION = "-Device-Location"
export const HEADER_DEVICE_TOKEN = "X--D-TOKEN"
export const HEADER_JWT_TOKEN = "Authorization"
export const HEADER_OPERATION_CONTEXT = "X--OP-CONTEXT"
export const HEADER_SESSION_TOKEN = "X--AUTH-TOKEN"
export const HEADER_SIMILITY_DEVICE_TOKEN = "X--F-TOKEN"
export const HEADER_USER_AGENT = "User-Agent"
export const HEADER_WEB_USER_AGENT = "X--D-INFO"

export const HEADER_API_VALID_KEYS = [
  HEADER_CONTENT_TYPE,
  HEADER_DEVICE_LOCATION,
  HEADER_DEVICE_TOKEN,
  HEADER_JWT_TOKEN,
  HEADER_SESSION_TOKEN,
  HEADER_SIMILITY_DEVICE_TOKEN,
  HEADER_USER_AGENT,
] as const

export const HEADER_WEB_VALID_KEYS = [...HEADER_API_VALID_KEYS, HEADER_WEB_USER_AGENT] as const