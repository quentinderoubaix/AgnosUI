const G=`import { getSliderDefaultConfig, createSlider } from '@agnos-ui/core-bootstrap/components/slider';
/**
 * Retrieve a shallow copy of the default Slider config
 * @returns the default Slider config
 */
const export_getSliderDefaultConfig = getSliderDefaultConfig;
export { export_getSliderDefaultConfig as getSliderDefaultConfig };
/**
 * Create a Slider with given config props
 * @param config - an optional slider config
 * @returns a SliderWidget
 */
const export_createSlider = createSlider;
export { export_createSlider as createSlider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxZQUFZLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUtoRzs7O0dBR0c7QUFDSCxNQUFNLDZCQUE2QixHQUFzQixzQkFBNkIsQ0FBQztBQUN2RixPQUFPLEVBQUMsNkJBQTZCLElBQUksc0JBQXNCLEVBQUMsQ0FBQztBQTZWakU7Ozs7R0FJRztBQUVILE1BQU0sbUJBQW1CLEdBQWdDLFlBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixJQUFJLFlBQVksRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRTbGlkZXJEZWZhdWx0Q29uZmlnLCBjcmVhdGVTbGlkZXJ9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL3NsaWRlcic7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBXaWRnZXQsIFdpZGdldEZhY3RvcnksIERpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuXG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNoYWxsb3cgY29weSBvZiB0aGUgZGVmYXVsdCBTbGlkZXIgY29uZmlnXG4gKiBAcmV0dXJucyB0aGUgZGVmYXVsdCBTbGlkZXIgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRTbGlkZXJEZWZhdWx0Q29uZmlnOiAoKSA9PiBTbGlkZXJQcm9wcyA9IGdldFNsaWRlckRlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0U2xpZGVyRGVmYXVsdENvbmZpZyBhcyBnZXRTbGlkZXJEZWZhdWx0Q29uZmlnfTtcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyQ29udGV4dCBleHRlbmRzIFdpZGdldFNsb3RDb250ZXh0PFNsaWRlcldpZGdldD4ge31cblxuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclNsb3RMYWJlbENvbnRleHQgZXh0ZW5kcyBTbGlkZXJDb250ZXh0IHtcblx0LyoqXG5cdCAqIHRoZSB2YWx1ZSBvZiB0aGUgaGFuZGxlIHRoZSBsYWJlbCBpcyBhdHRhY2hlZCB0b1xuXHQgKi9cblx0dmFsdWU6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclNsb3RIYW5kbGVDb250ZXh0IGV4dGVuZHMgU2xpZGVyQ29udGV4dCB7XG5cdC8qKlxuXHQgKiB0aGUgaGFuZGxlIGNvbnRleHRcblx0ICovXG5cdGl0ZW06IFNsaWRlckhhbmRsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJTdGF0ZSB7XG5cdFxuXHQvKipcblx0ICogU29ydGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdHNvcnRlZFZhbHVlczogbnVtYmVyW107XG5cdFxuXG5cdC8qKlxuXHQgKiBDb21iaW5lZCBsYWJlbCBsZWZ0IG9mZnNldCBpbiAlXG5cdCAqL1xuXHRjb21iaW5lZExhYmVsUG9zaXRpb25MZWZ0OiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBDb21iaW5lZCBsYWJlbCB0b3Agb2Zmc2V0IGluICVcblx0ICovXG5cdGNvbWJpbmVkTGFiZWxQb3NpdGlvblRvcDogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogSWYgdHJ1ZSwgdGhlIG1pbmltdW0gbGFiZWwgd2lsbCBiZSB2aXNpYmxlXG5cdCAqL1xuXHRtaW5WYWx1ZUxhYmVsRGlzcGxheTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIHRydWUsIHRoZSBtYXhpbXVtIGxhYmVsIHdpbGwgYmUgdmlzaWJsZVxuXHQgKi9cblx0bWF4VmFsdWVMYWJlbERpc3BsYXk6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiB0cnVlLCB0aGUgbGFiZWwgd2hlbiB0aGUgaGFuZGxlcyBhcmUgY2xvc2UgaXMgdmlzaWJsZVxuXHQgKi9cblx0Y29tYmluZWRMYWJlbERpc3BsYXk6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBBcnJheSBvZiB0aGUgc29ydGVkIGhhbmRsZXMgdG8gZGlzcGxheVxuXHQgKi9cblx0c29ydGVkSGFuZGxlczogU2xpZGVySGFuZGxlW107XG5cdFxuXG5cdC8qKlxuXHQgKiBBcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyBwcm9ncmVzcyBkaXNwbGF5IG9wdGlvbnNcblx0ICovXG5cdHByb2dyZXNzRGlzcGxheU9wdGlvbnM6IFByb2dyZXNzRGlzcGxheU9wdGlvbnNbXTtcblx0XG5cblx0LyoqXG5cdCAqIEFycmF5IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIGhhbmRsZSBkaXNwbGF5IG9wdGlvbnNcblx0ICovXG5cdGhhbmRsZURpc3BsYXlPcHRpb25zOiBIYW5kbGVEaXNwbGF5T3B0aW9uc1tdO1xuXHRcblxuXHQvKipcblx0ICogQ2hlY2sgaWYgdGhlIHNsaWRlciBpcyBpbnRlcmFjdGl2ZSwgbWVhbmluZyBpdCBpcyBub3QgZGlzYWJsZWQgb3IgcmVhZG9ubHlcblx0ICovXG5cdGludGVyYWN0aXZlOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0bWluOiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTAwYFxuXHQgKi9cblx0bWF4OiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBVbml0IHZhbHVlIGJldHdlZW4gc2xpZGVyIHN0ZXBzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDFgXG5cdCAqL1xuXHRzdGVwU2l6ZTogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRyZWFkb25seTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBpcyB2ZXJ0aWNhbGx5IHBvc2l0aW9uZWQgb3RoZXJ3aXNlIGl0IGlzIGhvcml6b250YWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHR2ZXJ0aWNhbDogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIEN1cnJlbnQgc2xpZGVyIHZhbHVlc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBbMF1gXG5cdCAqL1xuXHR2YWx1ZXM6IG51bWJlcltdO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSB2YWx1ZSBsYWJlbHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgc2xpZGVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRzaG93VmFsdWVMYWJlbHM6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG1pbiBhbmQgbWF4IGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdHNob3dNaW5NYXhMYWJlbHM6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJdCBgdHJ1ZWAgc2xpZGVyIGRpc3BsYXkgaXMgaW52ZXJzZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRydGw6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgc2xpZGVyXG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFNsaWRlckNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgbGFiZWxzIG9mIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe3ZhbHVlfTogU2xpZGVyU2xvdExhYmVsQ29udGV4dCkgPT4gJycgKyB2YWx1ZVxuXHQgKiBgYGBcblx0ICovXG5cdGxhYmVsOiBTbG90Q29udGVudDxTbGlkZXJTbG90TGFiZWxDb250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqICBTbG90IHRvIGNoYW5nZSB0aGUgaGFuZGxlcnNcblx0ICovXG5cdGhhbmRsZTogU2xvdENvbnRlbnQ8U2xpZGVyU2xvdEhhbmRsZUNvbnRleHQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKiBAcGFyYW0gdmFsdWUgLSB2YWx1ZSBvZiB0aGUgaGFuZGxlXG5cdCAqIEBwYXJhbSBzb3J0ZWRJbmRleCAtIGluZGV4IG9mIHRoZSBoYW5kbGUgaW4gdGhlIHNvcnRlZCBsaXN0XG5cdCAqIEBwYXJhbSBpbmRleCAtIGluZGV4IG9mIHRoZSBoYW5kbGUgaW4gdGhlIG9yaWdpbmFsIGxpc3Rcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAodmFsdWU6IG51bWJlcikgPT4gJycgKyB2YWx1ZVxuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFMYWJlbEhhbmRsZTogKHZhbHVlOiBudW1iZXIsIHNvcnRlZEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZXRleHQnIGF0dHJpYnV0ZSBmb3IgdGhlIGhhbmRsZVxuXHQgKiBAcGFyYW0gdmFsdWUgLSB2YWx1ZSBvZiB0aGUgaGFuZGxlXG5cdCAqIEBwYXJhbSBzb3J0ZWRJbmRleCAtIGluZGV4IG9mIHRoZSBoYW5kbGUgaW4gdGhlIHNvcnRlZCBsaXN0XG5cdCAqIEBwYXJhbSBpbmRleCAtIGluZGV4IG9mIHRoZSBoYW5kbGUgaW4gdGhlIG9yaWdpbmFsIGxpc3Rcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAodmFsdWU6IG51bWJlcikgPT4gJycgKyB2YWx1ZVxuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFWYWx1ZVRleHQ6ICh2YWx1ZTogbnVtYmVyLCBzb3J0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gc2xpZGVyIHZhbHVlcyBhcmUgY2hhbmdlZFxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgdXBkYXRlZCBzbGlkZXIgdmFsdWVzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvblZhbHVlc0NoYW5nZTogKHZhbHVlczogbnVtYmVyW10pID0+IHZvaWQ7XG5cdFxuXHQvKipcblx0ICogTWluaW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRtaW46IG51bWJlcjtcblx0XG5cblx0LyoqXG5cdCAqIE1heGltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAxMDBgXG5cdCAqL1xuXHRtYXg6IG51bWJlcjtcblx0XG5cblx0LyoqXG5cdCAqIFVuaXQgdmFsdWUgYmV0d2VlbiBzbGlkZXIgc3RlcHNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMWBcblx0ICovXG5cdHN0ZXBTaXplOiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGJ1dCB0aGUgc2xpZGVyIGlzIHN0aWxsIGZvY3VzYWJsZVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdHJlYWRvbmx5OiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdHZlcnRpY2FsOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYFswXWBcblx0ICovXG5cdHZhbHVlczogbnVtYmVyW107XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIHZhbHVlIGxhYmVscyBhcmUgZGlzcGxheWVkIG9uIHRoZSBzbGlkZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdHNob3dWYWx1ZUxhYmVsczogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgbWluIGFuZCBtYXggbGFiZWxzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIHNsaWRlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0c2hvd01pbk1heExhYmVsczogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIEl0IGB0cnVlYCBzbGlkZXIgZGlzcGxheSBpcyBpbnZlcnNlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdHJ0bDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IG9mIHRoZSBzbGlkZXJcblx0ICovXG5cdHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8U2xpZGVyQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBsYWJlbHMgb2YgdGhlIHNsaWRlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7dmFsdWV9OiBTbGlkZXJTbG90TGFiZWxDb250ZXh0KSA9PiAnJyArIHZhbHVlXG5cdCAqIGBgYFxuXHQgKi9cblx0bGFiZWw6IFNsb3RDb250ZW50PFNsaWRlclNsb3RMYWJlbENvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogIFNsb3QgdG8gY2hhbmdlIHRoZSBoYW5kbGVyc1xuXHQgKi9cblx0aGFuZGxlOiBTbG90Q29udGVudDxTbGlkZXJTbG90SGFuZGxlQ29udGV4dD47XG59XG5cblxuXG5leHBvcnQgdHlwZSBTbGlkZXJXaWRnZXQgPSBXaWRnZXQ8U2xpZGVyUHJvcHMsIFNsaWRlclN0YXRlLCBvYmplY3QsIFNsaWRlckRpcmVjdGl2ZXM+O1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBTbGlkZXIgd2l0aCBnaXZlbiBjb25maWcgcHJvcHNcbiAqIEBwYXJhbSBjb25maWcgLSBhbiBvcHRpb25hbCBzbGlkZXIgY29uZmlnXG4gKiBAcmV0dXJucyBhIFNsaWRlcldpZGdldFxuICovXG5cbmNvbnN0IGV4cG9ydF9jcmVhdGVTbGlkZXI6IFdpZGdldEZhY3Rvcnk8U2xpZGVyV2lkZ2V0PiA9IGNyZWF0ZVNsaWRlciBhcyBhbnk7XG5leHBvcnQge2V4cG9ydF9jcmVhdGVTbGlkZXIgYXMgY3JlYXRlU2xpZGVyfTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0Rpc3BsYXlPcHRpb25zIHtcblx0XG5cdC8qKlxuXHQgKiBSaWdodCBvZmZzZXQgb2YgdGhlIHByb2dyZXNzIGluICVcblx0ICovXG5cdGxlZnQ6IG51bWJlciB8IG51bGw7XG5cdFxuXHQvKipcblx0ICogTGVmdCBvZmZzZXQgb2YgdGhlIHByb2dyZXNzIGluICVcblx0ICovXG5cdHJpZ2h0OiBudW1iZXIgfCBudWxsO1xuXHRcblx0LyoqXG5cdCAqIFRvcCBvZmZzZXQgb2YgdGhlIHByb2dyZXNzIGluICVcblx0ICovXG5cdHRvcDogbnVtYmVyIHwgbnVsbDtcblx0XG5cdC8qKlxuXHQgKiBCb3R0b20gb2Zmc2V0IG9mIHRoZSBwcm9ncmVzcyBpbiAlXG5cdCAqL1xuXHRib3R0b206IG51bWJlciB8IG51bGw7XG5cdFxuXHQvKipcblx0ICogV2lkdGggb2YgdGhlIHByb2dyZXNzIGluICVcblx0ICovXG5cdHdpZHRoOiBudW1iZXI7XG5cdFxuXHQvKipcblx0ICogSGVpZ2h0IG9mIGh0ZSBwcm9ncmVzcyBpbiAlXG5cdCAqL1xuXHRoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYW5kbGVEaXNwbGF5T3B0aW9ucyB7XG5cdFxuXHQvKipcblx0ICogTGVmdCBvZmZzZXQgb2YgdGhlIGhhbmRsZSBpbiAlXG5cdCAqL1xuXHRsZWZ0OiBudW1iZXIgfCBudWxsO1xuXHRcblx0LyoqXG5cdCAqIFRvcCBvZmZzZXQgb2YgdGhlIGhhbmRsZSBpbiAlXG5cdCAqL1xuXHR0b3A6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVySGFuZGxlIHtcblx0XG5cdC8qKlxuXHQgKiBWYWx1ZSBvZiB0aGUgaGFuZGxlXG5cdCAqL1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRcblx0LyoqXG5cdCAqIEhhbmRsZSBpZFxuXHQgKi9cblx0aWQ6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBhcmlhTGFiZWwgb2YgdGhlIGhhbmRsZVxuXHQgKi9cblx0YXJpYUxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogYXJpYVZhbHVlVGV4dCBvZiB0aGUgaGFuZGxlXG5cdCAqL1xuXHRhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyRGlyZWN0aXZlcyB7XG5cdFxuXHQvKipcblx0ICogRGlyZWN0aXZlIHRvIGdldCB0aGUgc2xpZGVyIGNvbXBvbmVudCBlbGVtZW50UmVmXG5cdCAqL1xuXHRzbGlkZXJEaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB1c2VkIHRvIHN0eWxlIHRoZSBwcm9ncmVzcyBkaXNwbGF5IGZvciBlYWNoIGhhbmRsZVxuXHQgKi9cblx0cHJvZ3Jlc3NEaXNwbGF5RGlyZWN0aXZlOiBEaXJlY3RpdmU8e29wdGlvbjogUHJvZ3Jlc3NEaXNwbGF5T3B0aW9uc30+O1xuXHRcblxuXHQvKipcblx0ICogRGlyZWN0aXZlIHRvIGFwcGx5IHRvIHRoZSBzbGlkZXIgY2xpY2thYmxlIGFyZWEsIHRvIGRpcmVjdGx5IG1vdmUgdGhlIGhhbmRsZSB0byBhIGdpdmVuIHNwZWNpZmljIHBvc2l0aW9uXG5cdCAqL1xuXHRjbGlja2FibGVBcmVhRGlyZWN0aXZlOiBEaXJlY3RpdmU7XG5cdFxuXG5cdC8qKlxuXHQgKiBEaXJlY3RpdmUgdG8gYXBwbHkgaGFuZGxlIGV2ZW50cyBoYW5kbGVyc1xuXHQgKi9cblx0aGFuZGxlRXZlbnRzRGlyZWN0aXZlOiBEaXJlY3RpdmU8e2l0ZW06IHtpZDogbnVtYmVyfX0+O1xuXHRcblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0byBhcHBseSB0byB0aGUgc2xpZGVyIGhhbmRsZSBpZiBhbnlcblx0ICovXG5cdGhhbmRsZURpcmVjdGl2ZTogRGlyZWN0aXZlPHtpdGVtOiBTbGlkZXJIYW5kbGV9Pjtcblx0XG5cblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0byBnZXQgdGhlIG1pbkxhYmVsIGVsZW1lbnRSZWZcblx0ICovXG5cdG1pbkxhYmVsRGlyZWN0aXZlOiBEaXJlY3RpdmU7XG5cdFxuXG5cdC8qKlxuXHQgKiBEaXJlY3RpdmUgdG8gZ2V0IHRoZSBtYXhMYWJlbCBlbGVtZW50UmVmXG5cdCAqL1xuXHRtYXhMYWJlbERpcmVjdGl2ZTogRGlyZWN0aXZlO1xuXHRcblxuXHQvKipcblx0ICogRGlyZWN0aXZlIHRvIGFwcGx5IHRvIHRoZSBoYW5kbGUgd2hlbiBjb21iaW5lZCBsYWJlbCBkaXNwbGF5IGlzIGFjdGl2ZVxuXHQgKi9cblx0Y29tYmluZWRIYW5kbGVMYWJlbERpc3BsYXlEaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0byBhcHBseSB0byB0aGUgaGFuZGxlIHdoZW4gY29tYmluZWQgbGFiZWwgZGlzcGxheSBpcyBub3QgYWN0aXZlXG5cdCAqL1xuXHRoYW5kbGVMYWJlbERpc3BsYXlEaXJlY3RpdmU6IERpcmVjdGl2ZTx7aW5kZXg6IG51bWJlcn0+O1xufVxuXG4iXX0=`;export{G as default};
