function autoLoadTheme(){
    if(typeof window !== "undefined"){
    const theme = localStorage.getItem("theme")
    if(theme){
        document.querySelector("html")?.setAttribute("data-theme",theme)
    }
  }
}
export {autoLoadTheme}
export default autoLoadTheme