import md5 from 'blueimp-md5'

export const lower = str => typeof str === 'string' ? str.toLowerCase() : ""
export const trim = str => typeof str === 'string' ? str.trim() : ""
export const md5Hash = str => typeof str === 'string' ? md5(str) : ""

const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))
export const pipe = (...fns) => fns.reduce(_pipe)
