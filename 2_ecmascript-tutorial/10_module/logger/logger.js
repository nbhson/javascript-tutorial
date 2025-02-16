import { TYPE_LOG } from './const.js'

function loggerFunction(log, type = TYPE_LOG) {
  console[type](log);
}
export default loggerFunction


