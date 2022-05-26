import useWindowSize from "./useWindowSize";

export function useIsMobileDevice() {
  const size = useWindowSize();
  if (size.width === undefined) {
    return null;
  }

  return size.width < 768;
}

export default useIsMobileDevice;
