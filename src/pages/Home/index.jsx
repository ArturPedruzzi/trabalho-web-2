import { FiTruck, FiTag, FiShoppingCart, FiUserPlus } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Feature title="Todas as Vagas" icon={FiTag} to="/vacancies" />
        <Feature title="Cadastrar Vaga" icon={FiUserPlus} to="/register" />
      </main>
    </Container>
  )
}