import Avatar from "./components/avatar/Avatar";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Button label="Button Saya Primary" variant="primary" />
      <Button label="Button Saya Primary" variant="secondary" />
      <Avatar
        size="sm"
        url="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        label="Gambar 1"
      />

      <Avatar
        size="md"
        url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        label="Gambar 2"
      />

      <Avatar
        size="lg"
        url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        label="Gambar 3"
      />
      <br />

      <Input
        placeholder="Username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <Input type="password" placeholder="Password" />
      <br />
      <br />

      <Input type="number" placeholder="Umur" />
    </div>
  );
}

export default App;
