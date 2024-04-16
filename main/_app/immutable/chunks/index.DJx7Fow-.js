const c=`/*
 * Public API Surface of @agnos-ui/angular-bootstrap
 */
export * from '@agnos-ui/angular-headless';
export * from './agnos-ui-angular.module';
export { createAccordion, getAccordionDefaultConfig } from './components/accordion';
export * from './components/accordion';
export { createAlert, getAlertDefaultConfig } from './components/alert';
export * from './components/alert';
export { createModal, getModalDefaultConfig } from './components/modal';
export * from './components/modal';
export { createPagination, getPaginationDefaultConfig } from './components/pagination';
export * from './components/pagination';
export { createProgressbar, getProgressbarDefaultConfig } from './components/progressbar';
export * from './components/progressbar';
export { createRating, getRatingDefaultConfig } from './components/rating';
export * from './components/rating';
export { createSelect, getSelectDefaultConfig } from './components/select';
export * from './components/select';
export { createSlider, getSliderDefaultConfig } from './components/slider';
export * from './components/slider';
export { createToast, getToastDefaultConfig } from './components/toast';
export * from './components/toast';
export * from '@agnos-ui/core-bootstrap/services/transitions';
export * from '@agnos-ui/core-bootstrap/types';
export { widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory } from './config';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxjQUFjLDRCQUE0QixDQUFDO0FBRTNDLGNBQWMsMkJBQTJCLENBQUM7QUFZMUMsT0FBTyxFQUFDLGVBQWUsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLGNBQWMsd0JBQXdCLENBQUM7QUFHdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RFLGNBQWMsb0JBQW9CLENBQUM7QUFHbkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RFLGNBQWMsb0JBQW9CLENBQUM7QUFHbkMsT0FBTyxFQUFDLGdCQUFnQixFQUFFLDBCQUEwQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckYsY0FBYyx5QkFBeUIsQ0FBQztBQUd4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RixjQUFjLDBCQUEwQixDQUFDO0FBR3pDLE9BQU8sRUFBQyxZQUFZLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxjQUFjLHFCQUFxQixDQUFDO0FBR3BDLE9BQU8sRUFBQyxZQUFZLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxjQUFjLHFCQUFxQixDQUFDO0FBR3BDLE9BQU8sRUFBQyxZQUFZLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxjQUFjLHFCQUFxQixDQUFDO0FBR3BDLE9BQU8sRUFBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxjQUFjLG9CQUFvQixDQUFDO0FBRW5DLGNBQWMsK0NBQStDLENBQUM7QUFDOUQsY0FBYyxnQ0FBZ0MsQ0FBQztBQUcvQyxPQUFPLEVBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIEBhZ25vcy11aS9hbmd1bGFyLWJvb3RzdHJhcFxuICovXG5leHBvcnQgKiBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYWdub3MtdWktYW5ndWxhci5tb2R1bGUnO1xuXG5leHBvcnQgdHlwZSB7XG5cdEFjY29yZGlvbkFwaSxcblx0QWNjb3JkaW9uSXRlbUNvbnRleHQsXG5cdEFjY29yZGlvbkl0ZW1Qcm9wcyxcblx0QWNjb3JkaW9uSXRlbVN0YXRlLFxuXHRBY2NvcmRpb25JdGVtV2lkZ2V0LFxuXHRBY2NvcmRpb25Qcm9wcyxcblx0QWNjb3JkaW9uU3RhdGUsXG5cdEFjY29yZGlvbldpZGdldCxcbn0gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbic7XG5leHBvcnQge2NyZWF0ZUFjY29yZGlvbiwgZ2V0QWNjb3JkaW9uRGVmYXVsdENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJztcblxuZXhwb3J0IHR5cGUge0FsZXJ0Q29udGV4dCwgQWxlcnRQcm9wcywgQWxlcnRTdGF0ZSwgQWxlcnRXaWRnZXR9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydCc7XG5leHBvcnQge2NyZWF0ZUFsZXJ0LCBnZXRBbGVydERlZmF1bHRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQnO1xuXG5leHBvcnQgdHlwZSB7TW9kYWxDb250ZXh0LCBNb2RhbFByb3BzLCBNb2RhbFN0YXRlLCBNb2RhbFdpZGdldH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmV4cG9ydCB7Y3JlYXRlTW9kYWwsIGdldE1vZGFsRGVmYXVsdENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9tb2RhbCc7XG5cbmV4cG9ydCB0eXBlIHtQYWdpbmF0aW9uQ29udGV4dCwgUGFnaW5hdGlvbk51bWJlckNvbnRleHQsIFBhZ2luYXRpb25Qcm9wcywgUGFnaW5hdGlvblN0YXRlLCBQYWdpbmF0aW9uV2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5leHBvcnQge2NyZWF0ZVBhZ2luYXRpb24sIGdldFBhZ2luYXRpb25EZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5cbmV4cG9ydCB0eXBlIHtQcm9ncmVzc2JhckNvbnRleHQsIFByb2dyZXNzYmFyUHJvcHMsIFByb2dyZXNzYmFyU3RhdGUsIFByb2dyZXNzYmFyV2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXInO1xuZXhwb3J0IHtjcmVhdGVQcm9ncmVzc2JhciwgZ2V0UHJvZ3Jlc3NiYXJEZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyZXNzYmFyJztcblxuZXhwb3J0IHR5cGUge1JhdGluZ1Byb3BzLCBSYXRpbmdTdGF0ZSwgUmF0aW5nV2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nJztcbmV4cG9ydCB7Y3JlYXRlUmF0aW5nLCBnZXRSYXRpbmdEZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYXRpbmcnO1xuXG5leHBvcnQgdHlwZSB7U2VsZWN0Q29udGV4dCwgU2VsZWN0SXRlbUNvbnRleHQsIFNlbGVjdFByb3BzLCBTZWxlY3RTdGF0ZSwgU2VsZWN0V2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0JztcbmV4cG9ydCB7Y3JlYXRlU2VsZWN0LCBnZXRTZWxlY3REZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QnO1xuXG5leHBvcnQgdHlwZSB7U2xpZGVyQ29udGV4dCwgU2xpZGVyUHJvcHMsIFNsaWRlclNsb3RIYW5kbGVDb250ZXh0LCBTbGlkZXJTbG90TGFiZWxDb250ZXh0LCBTbGlkZXJTdGF0ZSwgU2xpZGVyV2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcbmV4cG9ydCB7Y3JlYXRlU2xpZGVyLCBnZXRTbGlkZXJEZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXInO1xuXG5leHBvcnQgdHlwZSB7VG9hc3RDb250ZXh0LCBUb2FzdEV4dHJhUHJvcHMsIFRvYXN0UHJvcHMsIFRvYXN0U3RhdGUsIFRvYXN0V2lkZ2V0fSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QnO1xuZXhwb3J0IHtjcmVhdGVUb2FzdCwgZ2V0VG9hc3REZWZhdWx0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvdG9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0JztcblxuZXhwb3J0ICogZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL3NlcnZpY2VzL3RyYW5zaXRpb25zJztcbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIHtXaWRnZXRzQ29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQge3dpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwgcHJvdmlkZVdpZGdldHNDb25maWcsIGluamVjdFdpZGdldENvbmZpZywgaW5qZWN0V2lkZ2V0c0NvbmZpZywgY2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4vY29uZmlnJztcbiJdfQ==`;export{c as default};
