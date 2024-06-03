const t=`import { SvelteComponent } from "svelte";
import type { RatingApi, RatingProps, RatingSlots } from './rating';
declare const __propDef: {
    props: {
        api?: RatingApi | undefined;
    } & Partial<RatingProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: RatingSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type RatingProps_ = typeof __propDef.props;
export { RatingProps_ as RatingProps };
export type RatingEvents = typeof __propDef.events;
type RatingSlots_ = typeof __propDef.slots;
export { RatingSlots_ as RatingSlots };
export default class Rating extends SvelteComponent<RatingProps_, RatingEvents, RatingSlots_> {
    get api(): RatingApi;
}
`;export{t as default};