module.exports = {
  withScope (tag) {
    const prefixedLogger = {
      log: (...args) => console.log(`[${tag}]`, ...args),
      warn: (...args) => console.warn(`[${tag}]`, ...args),
      error: (...args) => console.error(`[${tag}]`, ...args),
      success: (...args) => console.log(`[${tag}]`, ...args),
      debug: (...args) => console.debug(`[${tag}]`, ...args),
      trace: (...args) => console.trace(`[${tag}]`, ...args),
      fatal: (...args) => console.error(`[${tag}]`, ...args)
    }
    return prefixedLogger
  }
}
