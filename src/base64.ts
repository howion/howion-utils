import { encode, decode } from 'js-base64'

export function makeBase64Safe(base64: text) {
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function unmakeBase64Safe(base64: text) {
    return base64.replace(/-/g, '+').replace(/_/g, '/')
}

export function safeBase64Encode(data: text): text {
    return makeBase64Safe(base64EncodeUnicode(data))
}

export function safeBase64Decode(base64: text): text {
    return base64DecodeUnicode(unmakeBase64Safe(base64))
}

export function base64EncodeUnicode(str: text) {
    return encode(str)
}

export function base64DecodeUnicode(b64: text) {
    return decode(b64)
}
