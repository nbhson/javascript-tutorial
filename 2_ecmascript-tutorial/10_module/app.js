/** no default */
import { func_1 } from "./logger/function.js";

// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './const.js'
import * as constant from "./logger/const.js";

/** has default */
// import loggerFunction from './logger/index.js'
import newLogger from "./logger/index.js";

newLogger("Sơn Nguyên", constant.TYPE_ERROR);
func_1("New message");
