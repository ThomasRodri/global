import Cadastro from "@/components/Cadastro";
import Carrossel from "@/components/Carrossel";
import LoginPage from "@/components/Login";

export default function Home() {
  return (
    <div>
      <Carrossel/>
      <LoginPage/>
      <Cadastro/>
    </div>
    
  );
}
