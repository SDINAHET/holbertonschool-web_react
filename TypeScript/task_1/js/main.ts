// Définir l'interface Teacher
interface Teacher {
	readonly firstName: string; // Peut uniquement être défini lors de l'initialisation
	readonly lastName: string;  // Peut uniquement être défini lors de l'initialisation
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; // Optionnel
	location: string;
	[key: string]: any; // Permet d'ajouter des propriétés dynamiques avec des noms de propriété comme chaînes
  }

  // Exemple d'utilisation de l'interface Teacher
  const teacher3: Teacher = {
	firstName: "John",
	lastName: "Doe",
	fullTimeEmployee: false,
	location: "London",
	contract: false, // Propriété supplémentaire grâce à [key: string]: any
  };

  // Afficher l'objet teacher3
  console.log(teacher3);

  // Résultat attendu :
  // {
  //   contract: false,
  //   firstName: "John",
  //   fullTimeEmployee: false,
  //   lastName: "Doe",
  //   location: "London"
  // }
