// https://validatejs.org

import validate from 'validate.js';

validate.options = { format: 'flat', fullMessages: false };
validate.async.options = { format: 'flat', cleanAttributes: false };
validate.validators.presence.options = { allowEmpty: false };
validate.validators.presence.message = 'Vui lòng nhập';

export default validate;

export const constraints = {
  phone: {
    format: {
      pattern: /^(84|0[3|5|7|8|9])+([0-9]{8})$/,
      message: 'Sai định dạng, yêu cầu 10 chữ số'
    }
  },
  password: {
    length: {
      minimum: 8,
      maximum: 32,
      message: 'Vui nhập từ 8 đến 32 ký tự'
    },
    format: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/,
      message: 'Yêu cầu: chữ thường, in hoa, số, ký tự đặc biệt'
    }
  }
};
