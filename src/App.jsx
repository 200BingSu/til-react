import { useAxios } from "./hooks/useAxios";
import useComponent from "./hooks/useComponent";
import { useCount } from "./hooks/useCount";
import { useLogin } from "./hooks/useLogin";

function App() {
  const { count, add, minus, reset } = useCount();

  const windowSize = useComponent();
  return (
    <div>
      <h1>카운트: {count}</h1>
      <button type="button" onClick={add}>
        증가
      </button>
      <button type="button" onClick={minus}>
        감소
      </button>
      <button type="button" onClick={reset}>
        리셋
      </button>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MThfMTYz%2FMDAxNzIzOTQ3MzI4MDg5.uMLSAgzfn51Ir9UWxDWL0CPVnRdb92Iy-Tj4Z7V4bVIg.Htb6kdStJzNAFKnA1lKcE_LvBznht3UiNXEtBAoh0QQg.PNG%2F001.png&type=a340"
        alt=""
      />
    </div>
  );
}
export default App;
