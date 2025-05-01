import { x } from 'unhoax';
import { createCase } from '../benchmarks';

createCase('unhoax', 'parseSafe', () => {
  const dataType = x.object({
    number: x.number,
    negNumber: x.number,
    maxNumber: x.number,
    string: x.string,
    longString: x.string,
    boolean: x.boolean,
    deeplyNested: x.object({
      foo: x.string,
      num: x.number,
      bool: x.boolean,
    }),
  });

  return data => {
    return dataType.parse(data);
  };
});
