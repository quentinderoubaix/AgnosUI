const c=`import { getProgressbarDefaultConfig, createProgressbar } from '@agnos-ui/core-bootstrap/components/progressbar';
/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
const export_getProgressbarDefaultConfig = getProgressbarDefaultConfig;
export { export_getProgressbarDefaultConfig as getProgressbarDefaultConfig };
/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */
const export_createProgressbar = createProgressbar;
export { export_createProgressbar as createProgressbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQywyQkFBMkIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBTS9HOzs7R0FHRztBQUNILE1BQU0sa0NBQWtDLEdBQTJCLDJCQUFrQyxDQUFDO0FBQ3RHLE9BQU8sRUFBQyxrQ0FBa0MsSUFBSSwyQkFBMkIsRUFBQyxDQUFDO0FBbU0zRTs7OztHQUlHO0FBRUgsTUFBTSx3QkFBd0IsR0FBcUMsaUJBQXdCLENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixJQUFJLGlCQUFpQixFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFByb2dyZXNzYmFyRGVmYXVsdENvbmZpZywgY3JlYXRlUHJvZ3Jlc3NiYXJ9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL3Byb2dyZXNzYmFyJztcbmltcG9ydCB0eXBlIHtXaWRnZXRTbG90Q29udGV4dCwgU2xvdENvbnRlbnQsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QlNDb250ZXh0dWFsQ2xhc3N9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IFByb2dyZXNzYmFyIGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgUHJvZ3Jlc3NiYXIgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRQcm9ncmVzc2JhckRlZmF1bHRDb25maWc6ICgpID0+IFByb2dyZXNzYmFyUHJvcHMgPSBnZXRQcm9ncmVzc2JhckRlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0UHJvZ3Jlc3NiYXJEZWZhdWx0Q29uZmlnIGFzIGdldFByb2dyZXNzYmFyRGVmYXVsdENvbmZpZ307XG5cblxuXG5leHBvcnQgdHlwZSBQcm9ncmVzc2JhckNvbnRleHQgPSBXaWRnZXRTbG90Q29udGV4dDxQcm9ncmVzc2JhcldpZGdldD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NiYXJTdGF0ZSB7XG5cdFxuXHQvKipcblx0ICogUGVyY2VudGFnZSBvZiBjb21wbGV0aW9uLlxuXHQgKi9cblx0cGVyY2VudGFnZTogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYWJvdmUgaXRzIG1pbmltdW0gdmFsdWUuXG5cdCAqL1xuXHRzdGFydGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIGB0cnVlYCBpZiB0aGUgdmFsdWUgaGFzIHJlYWNoZWQgaXRzIG1heGltdW0gdmFsdWUuXG5cdCAqL1xuXHRmaW5pc2hlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYXJpYSB2YWx1ZSB0ZXh0LlxuXHQgKi9cblx0YXJpYVZhbHVlVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBtaW5pbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0bWluOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogVGhlIG1heGltdW0gdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDEwMGBcblx0ICovXG5cdG1heDogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0dmFsdWU6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1Byb2dyZXNzYmFyJ2Bcblx0ICovXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIFByb2dyZXNzYmFyLlxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIExhYmVsIG9mIHRoZSBwcm9ncmVzcy5cblx0ICovXG5cdGNoaWxkcmVuOiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRoZWlnaHQ6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRzdHJpcGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGFuaW1hdGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIHByb2dyZXNzYmFyLCBmb2xsb3dpbmcgYm9vdHN0cmFwIHR5cGVzLlxuXHQgKi9cblx0dHlwZTogQlNDb250ZXh0dWFsQ2xhc3MgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NiYXJQcm9wcyB7XG5cdFxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLXZhbHVldGV4dCcgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0gdmFsdWUgLSBjdXJyZW50IHZhbHVlXG5cdCAqIEBwYXJhbSBtaW5pbXVtIC0gbWluaW11bSB2YWx1ZVxuXHQgKiBAcGFyYW0gbWF4aW11bSAtIG1heGltdW0gdmFsdWVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB1bmRlZmluZWRcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhVmFsdWVUZXh0Rm46ICh2YWx1ZTogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIsIG1heGltdW06IG51bWJlcikgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBtaW5pbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0bWluOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogVGhlIG1heGltdW0gdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDEwMGBcblx0ICovXG5cdG1heDogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0dmFsdWU6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1Byb2dyZXNzYmFyJ2Bcblx0ICovXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIFByb2dyZXNzYmFyLlxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIExhYmVsIG9mIHRoZSBwcm9ncmVzcy5cblx0ICovXG5cdGNoaWxkcmVuOiBTbG90Q29udGVudDxQcm9ncmVzc2JhckNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIEhlaWdodCBvZiB0aGUgcHJvZ3Jlc3NiYXIsIGNhbiBiZSBhbnkgdmFsaWQgY3NzIGhlaWdodCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRoZWlnaHQ6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHNob3dzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRzdHJpcGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYW5pbWF0ZXMgYSBzdHJpcGVkIHByb2dyZXNzYmFyLlxuXHQgKiBUYWtlcyBlZmZlY3Qgb25seSBmb3IgYnJvd3NlcnMgc3VwcG9ydGluZyBDU1MzIGFuaW1hdGlvbnMsIGFuZCBpZiBgc3RyaXBlZGAgaXMgYHRydWVgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGFuaW1hdGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIFR5cGUgb2YgdGhlIHByb2dyZXNzYmFyLCBmb2xsb3dpbmcgYm9vdHN0cmFwIHR5cGVzLlxuXHQgKi9cblx0dHlwZTogQlNDb250ZXh0dWFsQ2xhc3MgfCB1bmRlZmluZWQ7XG59XG5cblxuXG5leHBvcnQgdHlwZSBQcm9ncmVzc2JhcldpZGdldCA9IFdpZGdldDxQcm9ncmVzc2JhclByb3BzLCBQcm9ncmVzc2JhclN0YXRlLCBvYmplY3QsIG9iamVjdCwgUHJvZ3Jlc3NiYXJEaXJlY3RpdmVzPjtcblxuXG5cbi8qKlxuICogQ3JlYXRlIGEgUHJvZ3Jlc3NiYXIgd2l0aCBnaXZlbiBjb25maWcgcHJvcHNcbiAqIEBwYXJhbSBjb25maWcgLSBhbiBvcHRpb25hbCBwcm9ncmVzc2JhciBjb25maWdcbiAqIEByZXR1cm5zIGEgUHJvZ3Jlc3NiYXJXaWRnZXRcbiAqL1xuXG5jb25zdCBleHBvcnRfY3JlYXRlUHJvZ3Jlc3NiYXI6IFdpZGdldEZhY3Rvcnk8UHJvZ3Jlc3NiYXJXaWRnZXQ+ID0gY3JlYXRlUHJvZ3Jlc3NiYXIgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfY3JlYXRlUHJvZ3Jlc3NiYXIgYXMgY3JlYXRlUHJvZ3Jlc3NiYXJ9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzYmFyRGlyZWN0aXZlcyB7XG5cdFxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCB0byB0aGUgbWFpbiBjb250YWluZXIgdGhhdCBoYW5kbGVzIGFyaWEgYXR0cmlidXRlcy5cblx0ICovXG5cdGFyaWFEaXJlY3RpdmU6IERpcmVjdGl2ZTtcbn1cblxuIl19`;export{c as default};