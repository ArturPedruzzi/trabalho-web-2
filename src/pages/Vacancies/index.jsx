import { useNavigate } from "react-router-dom";
import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';

export function Vacancies() {
  const navigate = useNavigate();

  const parkingSlots = [
    {
      plate: 'ABC-1234',
      ownerName: 'Ana',
      apartmentNumber: '101',
      block: 'A',
      vehicleModel: 'Toyota Corolla',
      vehicleColor: 'Prata',
      parkingSlotNumber: '1',
      occupied: true
    },
    {
      plate: 'XYZ-5678',
      ownerName: 'Gabriel',
      apartmentNumber: '202',
      block: 'B',
      vehicleModel: 'Honda Civic',
      vehicleColor: 'Preto',
      parkingSlotNumber: '2',
      occupied: true
    },
    {
      parkingSlotNumber: '3',
      block: 'C',
      occupied: false
    },
    {
      plate: 'HOS-4503',
      ownerName: 'José',
      apartmentNumber: '210',
      block: 'D',
      vehicleModel: 'Fiat Toro',
      vehicleColor: 'Preto',
      parkingSlotNumber: '4',
      occupied: true
    },
    {
      parkingSlotNumber: '5',
      block: 'A',
      occupied: false
    },
  ];

  return (
    <Container>
      <Header>
        <h1>Vagas de Estacionamento</h1>
        <nav>
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        parkingSlots.map((slot, index) => (
          <Item key={index}>
            <span>Vaga {slot.parkingSlotNumber}</span><br />
            <span>Bloco: {slot.block}</span><br />
            {slot.occupied ? (
              <>
                <span>Status: Ocupada</span><br />
                <span>Placa do veículo: {slot.plate}</span><br />
                <span>Nome do proprietário: {slot.ownerName}</span><br />
                <span>Número do apartamento: {slot.apartmentNumber}</span><br />
                <span>Modelo do veículo: {slot.vehicleModel}</span><br />
                <span>Cor do veículo: {slot.vehicleColor}</span><br />
              </>
            ) : (
              <>
                <span>Status: Disponível</span>
              </>
            )}
          </Item>
        ))
      }
    </Container>
  )
}
