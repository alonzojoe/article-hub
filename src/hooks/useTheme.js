import { useCallback } from "react";
import { getLocalStorage } from "../utils/storageActions";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
const useTheme = () => {
  const dispatch = useDispatch();
  const localStorageTheme = getLocalStorage("appTheme");
  const appTheme = useSelector((state) => state.ui.appTheme);
  const setDarkTheme = useCallback(() => {
    dispatch(uiActions.changeTheme("dark"));
  }, [dispatch]);

  const setAppTheme = useCallback(() => {
    if (
      localStorageTheme === "dark" ||
      localStorageTheme === null ||
      appTheme === "dark"
    )
      setDarkTheme();
  }, [localStorageTheme, setDarkTheme, appTheme]);

  return [setAppTheme];
};

export default useTheme;

//   const dispatch = useDispatch();
//   const localStorageTheme = getLocalStorage("appTheme");
//   console.log("lstorage", localStorageTheme);
//   useEffect(() => {
//     const setDarkTheme = () => {
//       dispatch(uiActions.changeTheme("dark"));
//     };

//     if (localStorageTheme === "dark") setDarkTheme();

//     console.log("useEffect");
//   }, [dispatch, localStorageTheme]);
