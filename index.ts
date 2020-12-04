interface Function {
  foo: string
}

export function bar(): Function {
  return {
    foo: 'bar'
  }
}

