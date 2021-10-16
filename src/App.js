import logo from './logo.svg';
import './App.css';
import { usePalette } from 'react-palette'

function App() {
  let img = "https://thumbs.dreamstime.com/b/d%C3%ADa-del-medio-ambiente-en-tierra-manos-de-%C3%A1rboles-cultivando-pl%C3%A1ntulas-fondo-verde-bokeh-hembra-sujetando-un-%C3%A1rbol-el-campo-la-130247647.jpg"
  const { data, loading, error } = usePalette(img)
  return (
    <div className="App">
      <section>
        <div style={{ backgroundColor: data.vibrant , color: 'white', }}>
          Text with the vibrant color
        </div>
      </section>
    </div>
  );
}

export default App;
