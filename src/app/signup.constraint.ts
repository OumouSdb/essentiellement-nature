export const signupConstraint = {
    lastName: {
        required: `Le nom est obligatoire`,
    },

    firstname: {
        required: `Le prenom est obligatoire`,
    },

    email: {
        required: `L'adresse email est obligatoire`,
    },
    age: {
        required: `L'âge' est obligatoire`,
    },
    sexe: {
        required: `Le genre est obligatoire`,

    },
    pass: {
        required: `Le mot de passe est obligatoire`,
        pattern: `Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial`
    },

    confirmPass: {
        required: `La confirmation du mot de passe est obligatoire`,
        match_password: `Le mot de passe et la confirmation doivent être identique`
    },
};