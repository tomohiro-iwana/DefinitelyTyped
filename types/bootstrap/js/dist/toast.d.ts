import BaseComponent, { GetInstanceFactory } from './base-component';

declare class Toast extends BaseComponent {
    constructor(element: string | Element, options?: Partial<Toast.Options>);

    /**
     * Reveals an element’s toast. Returns to the caller before the toast has actually
     * been shown (i.e. before the shown.bs.toast event occurs).
     * You have to manually call this method, instead your toast won’t show.
     */
    show(): void;

    /**
     * Hides an element’s toast. Returns to the caller before the toast has actually
     * been hidden (i.e. before the hidden.bs.toast event occurs).
     * You have to manually call this method if you made autohide to false.
     */
    hide(): void;

    static getInstance: GetInstanceFactory<Toast>;

    static jQueryInterface: Toast.jQueryInterface;

    // static NAME: 'toast';

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Toast.Options;
}

declare namespace Toast {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.toast',

        /**
         * This event is fired when the toast has been made visible to the user.
         */
        shown = 'shown.bs.toast',

        /**
         * This event is fired immediately when the hide instance method has
         * been called.
         */
        hide = 'hide.bs.toast',

        /**
         * This event is fired when the toast has finished being hidden from the
         * user.
         */
        hidden = 'hidden.bs.toast',
    }

    interface Options {
        /**
         * Apply a CSS fade transition to the toast
         *
         * @default true
         */
        animation: boolean;

        /**
         * Auto hide the toast
         *
         * @default true
         */
        autohide: boolean;

        /**
         * Delay hiding the toast (ms)
         *
         * @default 5000
         */
        delay: number;
    }

    type jQueryInterface = (config?: Partial<Options> | 'show' | 'hide' | 'dispose') => void;
}

export default Toast;
