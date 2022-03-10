var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import './myLabel.css';
/**
 * Default label for forms
 */
export function MyLabel(_a) {
    var _b = _a.label, label = _b === void 0 ? 'No label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.allCaps, allCaps = _e === void 0 ? false : _e, _f = _a.fontColor, fontColor = _f === void 0 ? '' : _f;
    return (_jsx("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor } }, { children: allCaps ? label.toUpperCase() : label })));
}
export default MyLabel;
