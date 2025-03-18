//provider
import Provider from "./provider.svelte";

//layouts
import DefaultLayout from "./layouts/default";
import V1Layout from "./layouts/v1/v1.svelte";

//components
import Pill from "./components/pill";
import {ThemeSelect} from "./components/themeselect"
import Loader from "./components/loader";
import Button from "./components/button";

//utils
import {autoLoadTheme} from "./utils/autoloadtheme.js"
export {
    Provider,
    DefaultLayout,
    V1Layout,
    Pill,
    ThemeSelect,
    Loader,
    Button,
    autoLoadTheme
}