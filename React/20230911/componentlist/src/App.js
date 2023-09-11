import Hello from "./Components/Hello";
import Time from "./Components/TIme";
import HelloProps from "./Components/HelloProps";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
import test, {test2} from "./Components/test";

function App() {
  test();
  test2();
  return (
    <div>
      <Hello name="gary"/>
      <Time/>
      <HelloProps name="jieun" age={15} someFunc={() => 'aswesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300"/>} someArr={[1,2,3,4]} someObj={{one: 1}}/>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <div>
        <ColorText color="red"/>
        <ColorText color="green"/>
        <ColorText color="blue"/>
      </div>
    </div>
  );
}

export default App;