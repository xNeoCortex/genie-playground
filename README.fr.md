# Projet de Fonctions Utilitaires TypeScript

Ce dépôt contient une collection de fonctions utilitaires simples en TypeScript et des exemples. C'est une structure de projet basique idéale pour apprendre, expérimenter ou servir de base pour d'autres projets TypeScript.

## Structure du Projet

```
src/
  fizzbuzz.ts          # Implémentation de FizzBuzz
  functions.ts         # Contient l'implémentation de Fibonacci
  functions.test.ts    # Tests unitaires pour la fonction Fibonacci avec Vitest
  functions.new.ts     # Fonction d'exemple 'wow'
  index.ts             # Point d'entrée pour démonstrations/expérimentations
README.fr.md           # Informations sur le projet en français
```

## Utilisation

### FizzBuzz

Affiche la séquence FizzBuzz jusqu'à un nombre donné :

```typescript
import { fizzbuzz } from "./src/fizzbuzz";

fizzbuzz(20);
// Sortie : 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
```

### Fibonacci

Calcule le n-ième nombre de Fibonacci de manière récursive avec gestion des erreurs pour les valeurs négatives :

```typescript
import { fibonacci } from "./src/functions";

console.log(fibonacci(10)); // Sortie : 55
```

### Fonction Wow

Une fonction de démonstration simple :

```typescript
import { wow } from "./src/functions.new";

wow(); // Sortie : wow
```

## Exécution du Code

Pour exécuter les exemples de code, utilisez `ts-node` ou compilez les fichiers TypeScript puis exécutez avec Node.js. Par exemple :

```bash
npx ts-node src/index.ts
```

## Tests

Les tests unitaires pour la fonction Fibonacci sont réalisés avec [Vitest](https://vitest.dev/).

Pour lancer les tests :

```bash
npx vitest run
```

## Licence

MIT