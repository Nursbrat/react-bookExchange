
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeToggle/themeToggleSlice";

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    useEffect(() => {
      if (prefersDark) {
        dispatch(toggleTheme());
      }
    }, [prefersDark, dispatch]);

    return theme;


};
