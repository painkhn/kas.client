import type { ComputedRef, Ref } from 'vue'
import { createContext } from 'radix-vue'

export const RIGHT_SIDEBAR_COOKIE_NAME = 'sidebar:state'
export const RIGHT_SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const RIGHT_SIDEBAR_WIDTH = "16rem";
export const RIGHT_SIDEBAR_WIDTH_MOBILE = "18rem";
export const RIGHT_SIDEBAR_WIDTH_ICON = "5rem";
export const RIGHT_SIDEBAR_KEYBOARD_SHORTCUT = "n";

export const [useRightSidebar, provideRightSidebarContext] = createContext<{
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
}>("RightSidebarComponent");
