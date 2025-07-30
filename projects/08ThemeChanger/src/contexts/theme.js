import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",//default value
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider = ThemeContext.Provider;


//Custome Hook 
export default function useTheme(){
    return useContext(ThemeContext);
}

// Okay so basically we can now use our useTheme() {customeHook} to fetch the object we define in the createContext