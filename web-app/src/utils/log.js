
export function info(info) {
  console.log(info);
}

export function error(ex, msg) {
  console.log(ex);

  if (msg) {
    console.log(msg);
  }
}

export default {
  info,
  error
}