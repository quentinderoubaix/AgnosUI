const e=`import type { AccordionItemContext, AccordionItemWidget, AccordionWidget, SlotContent, TransitionFn } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective, ComponentTemplate } from '@agnos-ui/angular-headless';
import type { AfterContentChecked, AfterViewInit } from '@angular/core';
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AccordionBodyDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionBodyDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionBodyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionBodyDirective, "ng-template[auAccordionItemBody]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionHeaderDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionHeaderDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionHeaderDirective, "ng-template[auAccordionItemHeader]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionItemStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(dir: AccordionItemStructureDirective, context: unknown): context is AccordionItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionItemStructureDirective, "ng-template[auAccordionItemStructure]", never, {}, {}, never, never, true, never>;
}
export declare class AccordionItemDefaultSlotsComponent {
    structure: TemplateRef<AccordionItemContext>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemDefaultSlotsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemDefaultSlotsComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
export declare const accordionItemDefaultSlotItemStructure: ComponentTemplate<unknown, "structure", AccordionItemDefaultSlotsComponent>;
export declare class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterContentChecked, AfterViewInit {
    slotItemHeader: SlotContent<AccordionItemContext>;
    slotItemHeaderFromContent: AccordionHeaderDirective | null;
    slotItemBody: SlotContent<AccordionItemContext>;
    slotItemBodyFromContent: AccordionBodyDirective | null;
    slotItemStructure: SlotContent<AccordionItemContext>;
    slotItemStructureFromContent: AccordionItemStructureDirective | null;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     */
    itemId: string | undefined;
    /**
     * The transition to use for the accordion-item collapse when is toggled.
     */
    itemTransition: TransitionFn | undefined;
    /**
     * Classes to add on the accordion-item DOM element.
     */
    itemClass: string | undefined;
    /**
     * If \`true\`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
     */
    itemDestroyOnHide: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     */
    itemDisabled: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     */
    itemVisible: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     */
    itemAnimation: boolean | undefined;
    /**
     * Classes to add on the accordion-item header DOM element.
     */
    itemHeaderClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     */
    itemButtonClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     */
    itemCollapseClass: string | undefined;
    /**
     * Classes to add on the accordion-item body DOM element.
     */
    itemBodyClass: string | undefined;
    /**
     * The html tag to use for the accordion-item-header.
     */
    itemHeadingTag: string | undefined;
    /**
     * An event fired when an item is shown.
     */
    itemShown: EventEmitter<void>;
    /**
     * An event fired when an item is hidden.
     */
    itemHidden: EventEmitter<void>;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     */
    itemVisibleChange: EventEmitter<boolean>;
    readonly ad: AccordionDirective;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<import("@agnos-ui/angular-headless").AdaptWidgetSlots<import("core/dist").AccordionItemWidget>>;
    constructor();
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "[auAccordionItem]", ["auAccordionItem"], { "slotItemHeader": { "alias": "auSlotItemHeader"; "required": false; }; "slotItemBody": { "alias": "auSlotItemBody"; "required": false; }; "slotItemStructure": { "alias": "auSlotItemStructure"; "required": false; }; "itemId": { "alias": "auItemId"; "required": false; }; "itemTransition": { "alias": "auItemTransition"; "required": false; }; "itemClass": { "alias": "auItemClass"; "required": false; }; "itemDestroyOnHide": { "alias": "auItemDestroyOnHide"; "required": false; }; "itemDisabled": { "alias": "auItemDisabled"; "required": false; }; "itemVisible": { "alias": "auItemVisible"; "required": false; }; "itemAnimation": { "alias": "auItemAnimation"; "required": false; }; "itemHeaderClass": { "alias": "auItemHeaderClass"; "required": false; }; "itemButtonClass": { "alias": "auItemButtonClass"; "required": false; }; "itemCollapseClass": { "alias": "auItemCollapseClass"; "required": false; }; "itemBodyClass": { "alias": "auItemBodyClass"; "required": false; }; "itemHeadingTag": { "alias": "auItemHeadingTag"; "required": false; }; }, { "itemShown": "auItemShown"; "itemHidden": "auItemHidden"; "itemVisibleChange": "auItemVisibleChange"; }, ["slotItemHeaderFromContent", "slotItemBodyFromContent", "slotItemStructureFromContent"], never, true, never>;
    static ngAcceptInputType_itemDestroyOnHide: unknown;
    static ngAcceptInputType_itemDisabled: unknown;
    static ngAcceptInputType_itemVisible: unknown;
    static ngAcceptInputType_itemAnimation: unknown;
}
export declare class AccordionDirective extends BaseWidgetDirective<AccordionWidget> {
    /**
     * If \`true\`, only one item at the time can stay open.
     */
    closeOthers: boolean | undefined;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * An event fired when an item is shown.
     *
     * Event payload is the id of the item.
     */
    shown: EventEmitter<string>;
    /**
     * An event fired when an item is hidden.
     *
     * Event payload is the id of the item.
     */
    hidden: EventEmitter<string>;
    /**
     * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
     *
     * It is a prop of the accordion-item.
     */
    itemId: string | undefined;
    /**
     * If \`true\`, the content of the accordion-item collapse will be removed from the DOM. It will be just hidden otherwise.
     *
     * It is a prop of the accordion-item.
     */
    itemDestroyOnHide: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be disabled.
     * It will not react to user's clicks, but still will be possible to toggle programmatically.
     *
     * It is a prop of the accordion-item.
     */
    itemDisabled: boolean | undefined;
    /**
     * If \`true\`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
     *
     * It is a prop of the accordion-item.
     */
    itemVisible: boolean | undefined;
    /**
     * If \`true\`, accordion-item will be animated.
     *
     * It is a prop of the accordion-item.
     */
    itemAnimation: boolean | undefined;
    /**
     * The transition to use for the accordion-item collapse when is toggled.
     *
     * It is a prop of the accordion-item.
     */
    itemTransition: TransitionFn | undefined;
    slotItemStructure: SlotContent<AccordionItemContext>;
    slotItemBody: SlotContent<AccordionItemContext>;
    slotItemHeader: SlotContent<AccordionItemContext>;
    /**
     * Classes to add on the accordion-item DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemClass: string | undefined;
    /**
     * Classes to add on the accordion-item header DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemHeaderClass: string | undefined;
    /**
     * Classes to add on the accordion-item toggle button DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemButtonClass: string | undefined;
    /**
     * Classes to add on the accordion-item collapse DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemCollapseClass: string | undefined;
    /**
     * Classes to add on the accordion-item body DOM element.
     *
     * It is a prop of the accordion-item.
     */
    itemBodyClass: string | undefined;
    /**
     * The html tag to use for the accordion-item-header.
     *
     * It is a prop of the accordion-item.
     */
    itemHeadingTag: string | undefined;
    /**
     * An event fired when an item is shown.
     *
     * It is a prop of the accordion-item.
     */
    itemShown: EventEmitter<void>;
    /**
     * An event fired when an item is hidden.
     *
     * It is a prop of the accordion-item.
     */
    itemHidden: EventEmitter<void>;
    /**
     * An event fired when the \`visible\` value changes.
     *
     * Event payload is the new value of visible.
     *
     * It is a prop of the accordion-item.
     */
    itemVisibleChange: EventEmitter<boolean>;
    readonly _widget: import("@agnos-ui/angular-headless").AngularWidget<AccordionWidget>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionDirective, "[auAccordion]", ["auAccordion"], { "closeOthers": { "alias": "auCloseOthers"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "itemId": { "alias": "auItemId"; "required": false; }; "itemDestroyOnHide": { "alias": "auItemDestroyOnHide"; "required": false; }; "itemDisabled": { "alias": "auItemDisabled"; "required": false; }; "itemVisible": { "alias": "auItemVisible"; "required": false; }; "itemAnimation": { "alias": "auItemAnimation"; "required": false; }; "itemTransition": { "alias": "auItemTransition"; "required": false; }; "slotItemStructure": { "alias": "auSlotItemStructure"; "required": false; }; "slotItemBody": { "alias": "auSlotItemBody"; "required": false; }; "slotItemHeader": { "alias": "auSlotItemHeader"; "required": false; }; "itemClass": { "alias": "auItemClass"; "required": false; }; "itemHeaderClass": { "alias": "auItemHeaderClass"; "required": false; }; "itemButtonClass": { "alias": "auItemButtonClass"; "required": false; }; "itemCollapseClass": { "alias": "auItemCollapseClass"; "required": false; }; "itemBodyClass": { "alias": "auItemBodyClass"; "required": false; }; "itemHeadingTag": { "alias": "auItemHeadingTag"; "required": false; }; }, { "shown": "auShown"; "hidden": "auHidden"; "itemShown": "auItemShown"; "itemHidden": "auItemHidden"; "itemVisibleChange": "auItemVisibleChange"; }, never, never, true, never>;
    static ngAcceptInputType_closeOthers: unknown;
    static ngAcceptInputType_itemDestroyOnHide: unknown;
    static ngAcceptInputType_itemDisabled: unknown;
    static ngAcceptInputType_itemVisible: unknown;
    static ngAcceptInputType_itemAnimation: unknown;
}
`;export{e as default};