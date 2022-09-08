import { EventModifiers } from "./event_modifiers";
export interface ActionDescriptor {
    eventTarget: EventTarget;
    eventOptions: EventModifiers;
    eventName: string;
    identifier: string;
    methodName: string;
}
export declare function parseActionDescriptorString(descriptorString: string): Partial<ActionDescriptor>;
export declare function stringifyEventTarget(eventTarget: EventTarget): "window" | "document" | undefined;
