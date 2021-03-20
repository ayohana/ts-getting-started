// To view output in the console, enter the following CLI commands:
// tsc
// node module08_exercise.js

// Using nested namespaces
namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting (greeting: string): void {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string): void {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
    
        function getLength(message: string): number {
            return message.length
        }
    }
}

AllGreetings.Greetings.returnGreeting('Bonjour');
AllGreetings.GreetingsWithLength.returnGreeting('Hola');

// Defining a namespace alias
import greet = AllGreetings.Greetings;
greet.returnGreeting('Hello');