import { useState } from "react";
import { FiTag, FiUser, FiHome, FiMapPin, FiTruck, FiDroplet, FiHash, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {

  const navigate = useNavigate();

  const [plate, setPlate] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [block, setBlock] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [parkingSlotNumber, setParkingSlotNumber] = useState("");

  function handleSignUp() {
    if (!plate || !ownerName || !apartmentNumber || !block || !vehicleModel || !vehicleColor || !parkingSlotNumber) {
      return alert("Preencha todos os campos!");
    }

    console.log("Placa do veículo: " + plate 
      + "\nNome do proprietário: " + ownerName 
      + "\nNúmero do apartamento: " + apartmentNumber
      + "\nBloco do apartamento: " + block
      + "\nModelo do veículo: " + vehicleModel
      + "\nCor do veículo: " + vehicleColor
      + "\nNúmero da vaga de estacionamento: " + parkingSlotNumber)

    alert("Usuário cadastrado com sucesso!")
    //navigate("/");
  }

  return (
    <Container>
      <Form>
        <h1>Cadastre seu veículo</h1>

        <Input
          placeholder="Placa do veículo"
          type="text"
          icon={FiTag}
          onChange={e => setPlate(e.target.value)}
        />

        <Input
          placeholder="Nome do proprietário"
          type="text"
          icon={FiUser}
          onChange={e => setOwnerName(e.target.value)}
        />

        <Input
          placeholder="Número do apartamento"
          type="text"
          icon={FiHome}
          onChange={e => setApartmentNumber(e.target.value)}
        />

        <Input
          placeholder="Bloco do apartamento"
          type="text"
          icon={FiMapPin}
          onChange={e => setBlock(e.target.value)}
        />

        <Input
          placeholder="Modelo do veículo"
          type="text"
          icon={FiTruck}
          onChange={e => setVehicleModel(e.target.value)}
        />

        <Input
          placeholder="Cor do veículo"
          type="text"
          icon={FiDroplet}
          onChange={e => setVehicleColor(e.target.value)}
        />

        <Input
          placeholder="Número da vaga de estacionamento"
          type="text"
          icon={FiHash}
          onChange={e => setParkingSlotNumber(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}
