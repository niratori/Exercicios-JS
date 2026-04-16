const medicos = [
  { 
    id: 1, 
    nome: "Dr. House", 
    especialidade: "Diagnóstico" 
  },
  { 
    id: 2, 
    nome: "Dra. Grey", 
    especialidade: "Cirurgia" 
  },
]

const pacientes = [
  { 
    id: 1, 
    nome: "John Doe", 
    dataNascimento: "15-10-1985",
    telefonePaciente: "984567890", 
  },
  { 
    id: 2, 
    nome: "Jane Smith", 
    dataNascimento: "30-05-1990",
    telefonePaciente: "987654321",
  },
]

let consultas = [
    { id: 1, data: "10-01-2023", idMedico: 1, idPaciente: 1, descricao: "Consulta Inicial" },
    { id: 2, data: "15-02-2023", idMedico: 2, idPaciente: 2, descricao: "Consulta de Seguimento" },
    { id: 3, data: "20-03-2023", idMedico: 1, idPaciente: 2, descricao: "Consulta de Rotina" },
];

export default { medicos, pacientes, consultas };