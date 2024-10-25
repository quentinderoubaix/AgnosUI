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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQywyQkFBMkIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBTS9HOzs7R0FHRztBQUNILE1BQU0sa0NBQWtDLEdBQTJCLDJCQUFrQyxDQUFDO0FBQ3RHLE9BQU8sRUFBQyxrQ0FBa0MsSUFBSSwyQkFBMkIsRUFBQyxDQUFDO0FBbU0zRTs7OztHQUlHO0FBRUgsTUFBTSx3QkFBd0IsR0FBcUMsaUJBQXdCLENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixJQUFJLGlCQUFpQixFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFByb2dyZXNzYmFyRGVmYXVsdENvbmZpZywgY3JlYXRlUHJvZ3Jlc3NiYXJ9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL3Byb2dyZXNzYmFyJztcbmltcG9ydCB0eXBlIHtXaWRnZXRTbG90Q29udGV4dCwgU2xvdENvbnRlbnQsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QlNDb250ZXh0dWFsQ2xhc3N9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IFByb2dyZXNzYmFyIGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgUHJvZ3Jlc3NiYXIgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRQcm9ncmVzc2JhckRlZmF1bHRDb25maWc6ICgpID0+IFByb2dyZXNzYmFyUHJvcHMgPSBnZXRQcm9ncmVzc2JhckRlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0UHJvZ3Jlc3NiYXJEZWZhdWx0Q29uZmlnIGFzIGdldFByb2dyZXNzYmFyRGVmYXVsdENvbmZpZ307XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzYmFyQ29udGV4dCBleHRlbmRzIFdpZGdldFNsb3RDb250ZXh0PFByb2dyZXNzYmFyV2lkZ2V0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzYmFyU3RhdGUge1xuXHRcblx0LyoqXG5cdCAqIFBlcmNlbnRhZ2Ugb2YgY29tcGxldGlvbi5cblx0ICovXG5cdHBlcmNlbnRhZ2U6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFib3ZlIGl0cyBtaW5pbXVtIHZhbHVlLlxuXHQgKi9cblx0c3RhcnRlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyByZWFjaGVkIGl0cyBtYXhpbXVtIHZhbHVlLlxuXHQgKi9cblx0ZmluaXNoZWQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogVGhlIGFyaWEgdmFsdWUgdGV4dC5cblx0ICovXG5cdGFyaWFWYWx1ZVRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbWluaW11bSB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdG1pbjogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMDBgXG5cdCAqL1xuXHRtYXg6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdHZhbHVlOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWwuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQcm9ncmVzc2JhcidgXG5cdCAqL1xuXHRhcmlhTGFiZWw6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBHbG9iYWwgdGVtcGxhdGUgZm9yIHRoZSBQcm9ncmVzc2Jhci5cblx0ICovXG5cdHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBMYWJlbCBvZiB0aGUgcHJvZ3Jlc3MuXG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0aGVpZ2h0OiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBzaG93cyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0c3RyaXBlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFuaW1hdGVzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRhbmltYXRlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBwcm9ncmVzc2JhciwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICovXG5cdHR5cGU6IEJTQ29udGV4dHVhbENsYXNzIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzYmFyUHJvcHMge1xuXHRcblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZS5cblx0ICogQHBhcmFtIHZhbHVlIC0gY3VycmVudCB2YWx1ZVxuXHQgKiBAcGFyYW0gbWluaW11bSAtIG1pbmltdW0gdmFsdWVcblx0ICogQHBhcmFtIG1heGltdW0gLSBtYXhpbXVtIHZhbHVlXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4gdW5kZWZpbmVkXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYVZhbHVlVGV4dEZuOiAodmFsdWU6IG51bWJlciwgbWluaW11bTogbnVtYmVyLCBtYXhpbXVtOiBudW1iZXIpID0+IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbWluaW11bSB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdG1pbjogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHZhbHVlLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMDBgXG5cdCAqL1xuXHRtYXg6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdHZhbHVlOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWwuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQcm9ncmVzc2JhcidgXG5cdCAqL1xuXHRhcmlhTGFiZWw6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBHbG9iYWwgdGVtcGxhdGUgZm9yIHRoZSBQcm9ncmVzc2Jhci5cblx0ICovXG5cdHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBMYWJlbCBvZiB0aGUgcHJvZ3Jlc3MuXG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8UHJvZ3Jlc3NiYXJDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBIZWlnaHQgb2YgdGhlIHByb2dyZXNzYmFyLCBjYW4gYmUgYW55IHZhbGlkIGNzcyBoZWlnaHQgdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0aGVpZ2h0OiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBzaG93cyBhIHN0cmlwZWQgcHJvZ3Jlc3NiYXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0c3RyaXBlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFuaW1hdGVzIGEgc3RyaXBlZCBwcm9ncmVzc2Jhci5cblx0ICogVGFrZXMgZWZmZWN0IG9ubHkgZm9yIGJyb3dzZXJzIHN1cHBvcnRpbmcgQ1NTMyBhbmltYXRpb25zLCBhbmQgaWYgYHN0cmlwZWRgIGlzIGB0cnVlYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRhbmltYXRlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBwcm9ncmVzc2JhciwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICovXG5cdHR5cGU6IEJTQ29udGV4dHVhbENsYXNzIHwgdW5kZWZpbmVkO1xufVxuXG5cblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NiYXJXaWRnZXQgPSBXaWRnZXQ8UHJvZ3Jlc3NiYXJQcm9wcywgUHJvZ3Jlc3NiYXJTdGF0ZSwgb2JqZWN0LCBQcm9ncmVzc2JhckRpcmVjdGl2ZXM+O1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBQcm9ncmVzc2JhciB3aXRoIGdpdmVuIGNvbmZpZyBwcm9wc1xuICogQHBhcmFtIGNvbmZpZyAtIGFuIG9wdGlvbmFsIHByb2dyZXNzYmFyIGNvbmZpZ1xuICogQHJldHVybnMgYSBQcm9ncmVzc2JhcldpZGdldFxuICovXG5cbmNvbnN0IGV4cG9ydF9jcmVhdGVQcm9ncmVzc2JhcjogV2lkZ2V0RmFjdG9yeTxQcm9ncmVzc2JhcldpZGdldD4gPSBjcmVhdGVQcm9ncmVzc2JhciBhcyBhbnk7XG5leHBvcnQge2V4cG9ydF9jcmVhdGVQcm9ncmVzc2JhciBhcyBjcmVhdGVQcm9ncmVzc2Jhcn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NiYXJEaXJlY3RpdmVzIHtcblx0XG5cdC8qKlxuXHQgKiBBIGRpcmVjdGl2ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBtYWluIGNvbnRhaW5lciB0aGF0IGhhbmRsZXMgYXJpYSBhdHRyaWJ1dGVzLlxuXHQgKi9cblx0YXJpYURpcmVjdGl2ZTogRGlyZWN0aXZlO1xufVxuXG4iXX0=`;export{c as default};
