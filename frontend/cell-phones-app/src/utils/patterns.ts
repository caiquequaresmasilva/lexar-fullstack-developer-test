export enum UserRegex {
  Pattern = "^(?=.*[a-zA-Z])[a-zA-Z\\sáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']{3,}$",
  Message = "The name must contain at least 3 characters, with only letters",
}

export enum PasswordRegex {
  Pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
  Message = "The password must contain at least 8 characters, with uppercase letters, lowercase letters and numbers.",
}

export enum ProductRegex {
  Pattern = "^(?=.*[a-zA-Z])[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\\s]{3,}$",
  Message = "The product name must contain at least 3 characters, with only letters and numbers",
}

export enum ModelRegex {
  Pattern = "^(?=.*[a-zA-Z])[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\\s]{3,}$",
  Message = "The model must contain at least 3 characters, with only letters and numbers",
}

export enum EmailRegex {
  Pattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$",
  Message = "The email must have the correct format.",
}
