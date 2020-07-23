export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

// Regra de negocio SERVICE
// Responsabilidade de salvar a persistencia dos dados fica no repository
