const Q=`import { DestroyRef, inject, signal } from '@angular/core';
import { ZoneWrapper } from './zone';
export * from '@agnos-ui/core/utils/stores';
export const toAngularSignal = (tansuSignal) => {
    const zoneWrapper = inject(ZoneWrapper);
    const res = signal(undefined);
    const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
        res.set(value);
        zoneWrapper.planNgZoneRun();
    });
    inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
    return res;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3N0b3Jlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUVuQyxjQUFjLDZCQUE2QixDQUFDO0FBRTVDLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFJLFdBQThCLEVBQWEsRUFBRTtJQUMvRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQXFCLENBQUMsQ0FBQztJQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQy9FLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN0RSxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtSZWFkYWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc3Ryb3lSZWYsIGluamVjdCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Wm9uZVdyYXBwZXJ9IGZyb20gJy4vem9uZSc7XG5cbmV4cG9ydCAqIGZyb20gJ0BhZ25vcy11aS9jb3JlL3V0aWxzL3N0b3Jlcyc7XG5cbmV4cG9ydCBjb25zdCB0b0FuZ3VsYXJTaWduYWwgPSA8VD4odGFuc3VTaWduYWw6IFJlYWRhYmxlU2lnbmFsPFQ+KTogU2lnbmFsPFQ+ID0+IHtcblx0Y29uc3Qgem9uZVdyYXBwZXIgPSBpbmplY3QoWm9uZVdyYXBwZXIpO1xuXHRjb25zdCByZXMgPSBzaWduYWwodW5kZWZpbmVkIGFzIGFueSBhcyBUKTtcblx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZSh0YW5zdVNpZ25hbC5zdWJzY3JpYmUpKCh2YWx1ZSkgPT4ge1xuXHRcdHJlcy5zZXQodmFsdWUpO1xuXHRcdHpvbmVXcmFwcGVyLnBsYW5OZ1pvbmVSdW4oKTtcblx0fSk7XG5cdGluamVjdChEZXN0cm95UmVmKS5vbkRlc3Ryb3koem9uZVdyYXBwZXIub3V0c2lkZU5nWm9uZShzdWJzY3JpcHRpb24pKTtcblx0cmV0dXJuIHJlcztcbn07XG4iXX0=`;export{Q as default};