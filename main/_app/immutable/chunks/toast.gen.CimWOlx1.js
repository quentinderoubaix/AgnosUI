const G=`import { getToastDefaultConfig, createToast } from '@agnos-ui/core-bootstrap/components/toast';
/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
const export_getToastDefaultConfig = getToastDefaultConfig;
export { export_getToastDefaultConfig as getToastDefaultConfig };
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
const export_createToast = createToast;
export { export_createToast as createToast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUs3Rjs7O0dBR0c7QUFDSCxNQUFNLDRCQUE0QixHQUFxQixxQkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUMsNEJBQTRCLElBQUkscUJBQXFCLEVBQUMsQ0FBQztBQTJNL0Q7Ozs7R0FJRztBQUNILE1BQU0sa0JBQWtCLEdBQStCLFdBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixJQUFJLFdBQVcsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRUb2FzdERlZmF1bHRDb25maWcsIGNyZWF0ZVRvYXN0fSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy90b2FzdCc7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm4sIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IFRvYXN0IGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgVG9hc3QgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRUb2FzdERlZmF1bHRDb25maWc6ICgpID0+IFRvYXN0UHJvcHMgPSBnZXRUb2FzdERlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0VG9hc3REZWZhdWx0Q29uZmlnIGFzIGdldFRvYXN0RGVmYXVsdENvbmZpZ307XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0Q29udGV4dCBleHRlbmRzIFdpZGdldFNsb3RDb250ZXh0PFRvYXN0V2lkZ2V0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0U3RhdGUge1xuXHRcblx0LyoqXG5cdCAqIElzIGB0cnVlYCB3aGVuIHRoZSBhbGVydCBpcyBoaWRkZW4uIENvbXBhcmVkIHRvIGB2aXNpYmxlYCwgdGhpcyBpcyB1cGRhdGVkIGFmdGVyIHRoZSB0cmFuc2l0aW9uIGlzIGV4ZWN1dGVkLlxuXHQgKi9cblx0aGlkZGVuOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkIG9mIHRoZSBldmVudCB3aXRoIHRoZSAoY2xvc2UpIG91dHB1dC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGRpc21pc3NpYmxlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0dmlzaWJsZTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdDbG9zZSdgXG5cdCAqL1xuXHRhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCBhdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSB0b2FzdCBhZnRlciB0aGUgZGVsYXkuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRhdXRvSGlkZTogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGhpZGluZyB0aGUgdG9hc3QuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDUwMDBgXG5cdCAqL1xuXHRkZWxheTogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIHRvYXN0IGNvbXBvbmVudFxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29udGVudFxuXHQgKi9cblx0Y2hpbGRyZW46IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogSGVhZGVyIHRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRoZWFkZXI6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RQcm9wcyB7XG5cdFxuXHQvKipcblx0ICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBhbGVydCBpcyBkaXNwbGF5ZWQgb3IgaGlkZGVuLlxuXHQgKlxuXHQgKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGBhbmltYXRlZE9uSW5pdGAsIHRoZSBhbmltYXRpb24gY2FuIGJlIG9wdGlvbmFsbHkgc2tpcHBlZCBkdXJpbmcgdGhlIHNob3dpbmcgcHJvY2Vzcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFkZVRyYW5zaXRpb25gXG5cdCAqL1xuXHR0cmFuc2l0aW9uOiBUcmFuc2l0aW9uRm47XG5cdFxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uVmlzaWJsZUNoYW5nZTogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgaGlkZGVuLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25IaWRkZW46ICgpID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgaXMgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvblNob3duOiAoKSA9PiB2b2lkO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gdGhlIGAub3BlbigpYCBmdW5jdGlvbiBpcyBjYWxsZWRcblx0ICogb3IgdGhlIHZpc2libGUgcHJvcCBpcyBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0YW5pbWF0ZWRPbkluaXQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgYnV0dG9uICjDlyksXG5cdCAqIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvbiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGFuaW1hdGVkOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkIG9mIHRoZSBldmVudCB3aXRoIHRoZSAoY2xvc2UpIG91dHB1dC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGRpc21pc3NpYmxlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgYWxlcnQgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0dmlzaWJsZTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIEFjY2Vzc2liaWxpdHkgY2xvc2UgYnV0dG9uIGxhYmVsXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdDbG9zZSdgXG5cdCAqL1xuXHRhcmlhQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCBhdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSB0b2FzdCBhZnRlciB0aGUgZGVsYXkuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRhdXRvSGlkZTogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGhpZGluZyB0aGUgdG9hc3QuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDUwMDBgXG5cdCAqL1xuXHRkZWxheTogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIEdsb2JhbCB0ZW1wbGF0ZSBmb3IgdGhlIHRvYXN0IGNvbXBvbmVudFxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxUb2FzdENvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29udGVudFxuXHQgKi9cblx0Y2hpbGRyZW46IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogSGVhZGVyIHRlbXBsYXRlIGZvciB0aGUgdG9hc3QgY29tcG9uZW50XG5cdCAqL1xuXHRoZWFkZXI6IFNsb3RDb250ZW50PFRvYXN0Q29udGV4dD47XG59XG5cblxuXG5leHBvcnQgdHlwZSBUb2FzdFdpZGdldCA9IFdpZGdldDxUb2FzdFByb3BzLCBUb2FzdFN0YXRlLCBUb2FzdEFwaSwgVG9hc3REaXJlY3RpdmVzPjtcblxuXG5cbi8qKlxuICogQ3JlYXRlIGFuIFRvYXN0V2lkZ2V0IHdpdGggZ2l2ZW4gY29uZmlnIHByb3BzXG4gKiBAcGFyYW0gY29uZmlnIC0gYW4gb3B0aW9uYWwgYWxlcnQgY29uZmlnXG4gKiBAcmV0dXJucyBhbiBUb2FzdFdpZGdldFxuICovXG5jb25zdCBleHBvcnRfY3JlYXRlVG9hc3Q6IFdpZGdldEZhY3Rvcnk8VG9hc3RXaWRnZXQ+ID0gY3JlYXRlVG9hc3QgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfY3JlYXRlVG9hc3QgYXMgY3JlYXRlVG9hc3R9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0QXBpIHtcblx0XG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBhbGVydCBjbG9zaW5nIHByb2dyYW1tYXRpY2FsbHkgKHNhbWUgYXMgY2xpY2tpbmcgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpKS5cblx0ICovXG5cdGNsb3NlKCk6IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyB0aGUgYWxlcnQgdG8gYmUgZGlzcGxheWVkIGZvciB0aGUgdXNlci5cblx0ICovXG5cdG9wZW4oKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdERpcmVjdGl2ZXMge1xuXHRcblx0LyoqXG5cdCAqIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGl2ZSwgcGlsb3Rpbmcgd2hhdCBpcyB0aGUgdmlzdWFsIGVmZmVjdCBvZiBnb2luZyBmcm9tIGhpZGRlbiB0byB2aXNpYmxlXG5cdCAqL1xuXHR0cmFuc2l0aW9uRGlyZWN0aXZlOiBEaXJlY3RpdmU7XG5cdFxuXHQvKipcblx0ICogRGlyZWN0aXZlIHRoYXQgaGFuZGxlcyB0aGUgYXV0b2hpZGUgb2YgdGhlIHRvYXN0IGNvbXBvbmVudFxuXHQgKi9cblx0YXV0b0hpZGVEaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cdC8qKlxuXHQgKiBEaXJlY3RpdmUgdGhhdCBhZGRzIGFsbCB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gdGhlIGJvZHlcblx0ICovXG5cdGJvZHlEaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cdC8qKlxuXHQgKiBEaXJlY3RpdmUgdGhhdCBhZGRzIGFsbCB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gdGhlIGNsb3NlIGJ1dHRvbiBkZXBlbmRpbmcgb24gdGhlIHByZXNlbmNlIG9mIHRoZSBoZWFkZXJcblx0ICovXG5cdGNsb3NlQnV0dG9uRGlyZWN0aXZlOiBEaXJlY3RpdmU7XG59XG5cbiJdfQ==`;export{G as default};
