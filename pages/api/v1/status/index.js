function status(request, response) {
  response.status(200).json({ aluno: "legal" });
}

export default status;
