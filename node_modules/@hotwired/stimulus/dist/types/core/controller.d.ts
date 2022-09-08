import { ClassPropertiesBlessing } from "./class_properties";
import { Constructor } from "./constructor";
import { Context } from "./context";
import { ValueDefinitionMap } from "./value_properties";
export declare type ControllerConstructor = Constructor<Controller>;
export declare class Controller<ElementType extends Element = Element> {
    static blessings: (typeof ClassPropertiesBlessing)[];
    static targets: string[];
    static values: ValueDefinitionMap;
    static get shouldLoad(): boolean;
    readonly context: Context;
    constructor(context: Context);
    get application(): import("./application").Application;
    get scope(): import("./scope").Scope;
    get element(): ElementType;
    get identifier(): string;
    get targets(): import("./target_set").TargetSet;
    get classes(): import("./class_map").ClassMap;
    get data(): import("./data_map").DataMap;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    dispatch(eventName: string, { target, detail, prefix, bubbles, cancelable }?: {
        target?: ElementType | undefined;
        detail?: {} | undefined;
        prefix?: string | undefined;
        bubbles?: boolean | undefined;
        cancelable?: boolean | undefined;
    }): CustomEvent<{}>;
}
