import { useEffect } from 'react'

const useBodyClick = (ref, setter, value) => {
    useEffect(() => {
      const onBodyClick = (e) => {
        if (ref.current.contains(e.target)) {
          return;
        }

        setter(value);
      };

      document.body.addEventListener("click", onBodyClick);

      return () => {
        document.body.removeEventListener("click", onBodyClick);
      };
    }, [value, ref, setter]);

}

export default useBodyClick
