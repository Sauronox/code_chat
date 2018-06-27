import moment from "moment";
export function date(value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }
}
