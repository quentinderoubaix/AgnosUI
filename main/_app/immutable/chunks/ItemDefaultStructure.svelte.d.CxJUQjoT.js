const t=`import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: AccordionSlots;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: AccordionSlots;
};
export type ItemDefaultStructureProps = typeof __propDef.props;
export type ItemDefaultStructureEvents = typeof __propDef.events;
export type ItemDefaultStructureSlots = typeof __propDef.slots;
export default class ItemDefaultStructure extends SvelteComponentTyped<ItemDefaultStructureProps, ItemDefaultStructureEvents, ItemDefaultStructureSlots> {
}
export {};
`;export{t as default};