import "./App.css";
import Typography from "./components/atom/typography/Typography";
function App() {
  return (
    <>
      <Typography text="message" tag="h1" className='title' style={{color:'red'}} >
        <div style={{color:'green '}}>Hello world</div>
      </Typography>

      <Typography text="messdge" tag="h5"  />
    </>
  );
}

export default App;
