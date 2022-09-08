import { ActionDescriptor } from "./action_descriptor";
import { Token } from "../mutation-observers";
import { EventModifiers } from "./event_modifiers";
export declare class Action {
    readonly element: Element;
    readonly index: number;
    readonly eventTarget: EventTarget;
    readonly eventName: string;
    readonly eventOptions: EventModifiers;
    readonly identifier: string;
    readonly methodName: string;
    static forToken(token: Token): Action;
    constructor(element: Element, index: number, descriptor: Partial<ActionDescriptor>);
    toString(): string;
    get params(): {
        [key: string]: any;
    };
    private get eventTargetName();
}
export declare function getDefaultEventNameForElement(element: Element): string | undefined;
