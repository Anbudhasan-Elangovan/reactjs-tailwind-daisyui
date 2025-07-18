import { Link } from "react-router-dom";

export default function Exercise() {
  const reactHooks = [
    {
      hookName: "useState()",
    },
    {
      hookName: "useEffect()",
    },
    {
      hookName: "useContext()",
    },
    {
      hookName: "useRef()",
    },
    {
      hookName: "useReducer()",
    },
    {
      hookName: "useMemo()",
    },
    {
      hookName: "useCallback()",
    },
    {
      hookName: "useTransition()",
    },
    {
      hookName: "useDeferredValue()",
    },
    {
      hookName: "useInsertionEffect()",
    },
    {
      hookName: "useLayoutEffect()",
    },
    {
      hookName: "useActionState()",
    },
    {
      hookName: "useOptimistic()",
    },
    {
      hookName: "use()",
    },
  ];
  return (
    <>
      <div className="font-bold py-2">Exercise</div>

      <div className="grid grid-cols-7 gap-4">
        {reactHooks.map((hook) => (
          <Link to={hook.hookName}>
            <div className="stats shadow hover:bg-slate-200 cursor-pointer w-full bg-white">
              <div className="stat">
                <div className="stat-title">{hook.hookName}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
