//provider
import Provider from "./provider.svelte";

//layouts
import DefaultLayout from "./layouts/default";
import V1Layout from "./layouts/v1/v1.svelte";

//components
import Pill from "./components/pill";
import {ThemeSelect} from "./components/themeselect"

//utils
import {autoLoadTheme} from "./utils/autoloadtheme.js"
export {
    Provider,
    DefaultLayout,
    V1Layout,
    Pill,
    ThemeSelect,
    autoLoadTheme
}