import pkg from 'shortid';

const { generate } = pkg;
export function genId() {
  return generate();
}
