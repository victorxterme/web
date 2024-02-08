// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hi, here are all the commands:
  - about
  - github
  - projects
  - classes
  - linkedin
  - email
  - resume

`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hello, my name is ${config.name}. 
I am a student at Waterloo University currently in my first year, majoring in Computer Science.
Some of my hobbies are coding, drawing going to the gym, and rock climbing.
Some skills I have are time-managment, problem solving, communication and organization. To learn
more about me, type 'help'.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// projects 
export const projects = async (args: string[]): Promise<string> => {
  return `Here are some of my projects: 
  - Sudoku Solver
  - WARG automated landing detection
  For more details, enter the first word of each project.
  - API backend`;

};

export const Sudoku = async (args: string[]): Promise<string> => {
  return `I built a sudoku solver in python exclusively on my own. I required me to design its UI, create a 
  valid board game every time it's generated, choose valid starting cells, and implement a backtracking algorithm
  to solve the game. I learned a lot about how to combine the algorithm to solve the sudoku with 
  what I was displaying, and I also learned ways to organize my code better.`;
};
export const sudoku = async (args: string[]): Promise<string> => {
  return `I built a sudoku solver in python exclusively on my own. I required me to design its UI, create a 
  valid board game every time it's generated, choose valid starting cells, and implement a backtracking algorithm
  to solve the game. I learned a lot about how the internal process of my code solving the sudoku interacted with 
  what I was displaying, and I also learned how to organize my code better.`;
};
export const WARG = async (args: string[]): Promise<string> => {
  return `I joined the Waterloo Aerial Robotics Group (Warg) in early january, and have started learning how to use
  ultralytics (python module) for tracking and detecting real objects. I learned how to implement a drone detecting a landing pad, 
  how to make a drone go from one point to another, and land in a simulation.`;
};
export const warg = async (args: string[]): Promise<string> => {
  return `I joined the Waterloo Aerial Robotics Group (Warg) in early january, and have started learning how to use
  ultralytics (python module) for tracking and detecting real objects. I learned how to implement a drone detecting a landing pad, 
  how to make a drone go from one point to another, and land in a simulation.`;
};
export const API = async (args: string[]): Promise<string> => {
  return `Learned how to use Node.JS to create a backend for my websites, and used MongoDB for the database. This allowed 
  my to develop my javascript skills. I plan to create a website that reccomends a movie based on user inputs using a web scraper.`;
};
export const api = async (args: string[]): Promise<string> => {
  return `Learned how to use Node.JS to create a backend for my websites, and used MongoDB for the database. This allowed 
  my to develop my javascript skills. I plan to create a website that reccomends a movie based on user inputs using a web scraper.`;
};


export const classes = async (args: string[]): Promise<string> => {
  return `These are the classes I'm currently taking:
  - Statistics (Analytical methods)
  - Linear Algebra
  - CS (Elementary Algorithm Design and Data Abstraction)
  - CS Lab (Unix)
  - Commerce 
  - Communication Class`;
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mail...:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};














// Banner
export const banner = (args?: string[]): string => {
return `
                                           .   .  .   .                                                    
  .     .   .         MM88& . .                           *         .   .     .        .         !             .                                
*  *  *        _...MMMMM88&&&&..._        .    .     *            .                              !           .    .                        
.       * * *.::'''MMMMM88&&&&&  '::.   .   .         *               .       .      .           ^    .   .                           
.  .  * *   ::    MMMMM88&&&&&&     ::     .  *   '  .   ~*                  .::.               / \\              .      .        
.  *       '::....MMMMM88&&&&&&....::'        .   .  .    . .             .:'  .:  ..   .      /___\\   .      .                             
          .    ''''MMMMM88&&&&''''    .    .    .        .               :'    :.  .   .      |=   =|                                      
.    .        .     MMMMM8&&&'             .   .      .        MMM8&&&.:'   .:'  .   .    .   |     |         
     .           . .    . .    .      .    .      .     .     MMMMM88&&&&  .:' .    .  .  .   |     |                                                               
   .    *    .          .    .      .   .   .         .   .  MMMMM88&&&&&&:'  .    .          |     |                                       
         *     .    . .    .       .           .     .       MMMMM88&&&&&&      .  .  . .     |     |                
  .    .         .       .                 .     .   .     .:MMMMM88&&&&&&  .                 |     |                                                      
         .    .  .       .  .  .   .    .               .:'  MMMMM88&&&&       .    . .       |     |                  
          . .         .        .    .           .     .:'   .:'MMM8&&&'      .    .     .     |     |.      ...     .
  .            ██╗   ██╗██╗ ██████╗████████╗ ██████╗ ██████╗        .     .   .  .   . .      |     |      .       .          
       .     . ██║   ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗    .     .    .      .          |     |'::'    .    .  . .    .  .                                                            
            .  ██║   ██║██║██║        ██║   ██║   ██║██████╔╝     .                .    .     |     | .                .      .    .  .               
    .    .     ╚██╗ ██╔╝██║██║        ██║   ██║   ██║██╔══██╗           .    .   .            |     |.   .   .    .  .     .   .  .    .                   
                ╚████╔╝ ██║╚██████╗   ██║   ╚██████╔╝██║  ██║         .         .             |     |               .           .   
   .  .     . *  ╚═══╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝ .     .     .  .       .        |     |       .          .          
        .      * * *       .     .                  .    . .          .                       |     |          .    .                                  
    .  .   .    *  *                .        . .      .         .   .   .   .   .        .  / |     |\\         .      .          
  .    .      *      *      .  .   .       .          .   .   .  ..            .           /  |##!##|  \\     .      .      .         
    .     .                                  .   .    .             .     .         .     |.  / ^ |^ \\  |   
      .     .  .      .    .  .       .       .    _______      .  .         .            | /  ( | )  \\ |       .  .     .             
    .    .   .     .      .         .  .   .     .-' _____ '-.        .   .         .     |/   ( | )   \\|                                  
      .      .    .      .     . .  .    .    .' .-'.  ':'-. '.    .  .           .           ((   ))         .     ..   .
  .     .  .  .  .   ..  .     .   .        / .''::: .:    '. \\             .      .         ((  :  ))          .        .            
  '      . .      . .  .               .    / /   :::::'      \\ \\     .  .      .            ((  :  )).                                                        
                  .               .      . | ;.    ':'         ; |        .   . .    .        ((   ))    .    .      .      .   .                 
   .  ^  ^  ^  .   .    .       .       .  | |       '..       | |        .                    (( ))     .   .     .      .         
        .     .      .    .   .            | ; '      ::::.    ; |   .                          ( ).    .  .         .     .     .
          .     .   .                .      \\ \\       '::::   / /  .            .    .   .     . +        .                                   
    .                   .   .                \\ '.      :::  .' /      .  .     .      .        ..    .  .     .      .
      .  .           .           .            '. '-.___'_.-' .'                            .     +     .                      
           .    .          .          .    .    '-._______.-       .   .  .  .   .     .           .               ..      
    .          .                ....                                     .         .         .   +            .               
          .             .     ..        .   .   .  .    .        .     .    .    .    .  .      + +         .       .         .    .
               
                                  

'help' for commands.

`;
};
