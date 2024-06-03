const t=`import { SvelteComponent } from "svelte";
import type { PaginationContext, PaginationSlots } from './pagination';
declare const __propDef: {
    props: PaginationContext;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: PaginationSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PaginationDefaultPagesProps = typeof __propDef.props;
export type PaginationDefaultPagesEvents = typeof __propDef.events;
export type PaginationDefaultPagesSlots = typeof __propDef.slots;
export default class PaginationDefaultPages extends SvelteComponent<PaginationDefaultPagesProps, PaginationDefaultPagesEvents, PaginationDefaultPagesSlots> {
}
export {};
`;export{t as default};