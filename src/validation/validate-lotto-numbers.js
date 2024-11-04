import { LOTTO_FORMAT, LOTTO_RULES } from '../constant/index.js';
import throwError from '../util/throw-error.js';
import runValidators from './run-validator.js';

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '입력 값이 비어 있거나 입력 값에 빈 값이 포함되어 있습니다.',
  INVALID_INPUT: `로또 번호는 숫자와 ${LOTTO_FORMAT.DELIMITER}로 구분되어야 합니다.`,
  INVALID_LENGTH: `로또 번호는 ${LOTTO_RULES.NUMBER_COUNT}개여야 합니다.`,
  DUPLICATE_NUMBER: '로또 번호에 중복된 번호가 있습니다.',
  INVALID_RANGE: `로또 번호는 ${LOTTO_RULES.MIN_NUMBER}부터 ${LOTTO_RULES.MAX_NUMBER} 사이의 숫자여야 합니다.`,
};

const checkEmptyInput = (numbers) => {
  if (numbers.includes(null)) throwError(ERROR_MESSAGES.EMPTY_INPUT);
  return numbers;
};

const checkValidInput = (numbers) => {
  if (numbers.some((num) => Number.isNaN(num))) throwError(ERROR_MESSAGES.INVALID_INPUT);
  return numbers;
};

const checkValidLength = (numbers) => {
  if (numbers.length !== LOTTO_RULES.NUMBER_COUNT) throwError(ERROR_MESSAGES.INVALID_LENGTH);
  return numbers;
};

const checkDuplicateNumbers = (numbers) => {
  if (new Set(numbers).size !== numbers.length) throwError(ERROR_MESSAGES.DUPLICATE_NUMBER);
  return numbers;
};

const checkRange = (numbers) => {
  if (!numbers.every((num) => num >= LOTTO_RULES.MIN_NUMBER && num <= LOTTO_RULES.MAX_NUMBER)) {
    throwError(ERROR_MESSAGES.INVALID_RANGE);
  }
  return numbers;
};

const validateLottoNumbers = (numbers) => runValidators([checkEmptyInput, checkValidInput, checkValidLength, checkDuplicateNumbers, checkRange], numbers);

export default validateLottoNumbers;