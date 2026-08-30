export interface BlogPage {
  id: number;
  description: string;
  name: string;
}
export const blogPage: BlogPage[] = [
  {
    id: 1,
    name: "What Do You Have To Prepare When Learning NextJs?",
    description: `
        First, we need to know the 5 key important coding languange:
        
        HTML
        CSS
        JavaScript
        TypeScript
        React.js
        
        for JavaScript, TypeScript, and React.js you'll only need to know PBO and OOP as it's crutial for files and routing later on.
        for HTML and CSS you'll need to have a good foundation of the basic. Including CSS as it's animation comes in handy later on.`,
  },
];
