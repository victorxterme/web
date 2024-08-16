// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import chessStart from '../../../assets/starting.png';
import chessMiddle from '../../../assets/im.jpg'
import quicksort1 from '../../../assets/sorting1.png'
import quicksort2 from '../../../assets/sorting2.png'
import sorts from '../../../assets/sorting3.png'
import sudokus from '../../../assets/sudoku.png'
import sudokusEnd from '../../../assets/sudokuEnd.png'
import movi1 from '../../../assets/movie1.png'
import movi2 from '../../../assets/movie2.png'

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
  - classes
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
  return `My name is ${config.name} and I am a student at Waterloo University currently in my first year, 
majoring in Computer Science. Some of my hobbies are coding, drawing, going to the gym, and rock climbing.
Some of my skills include time-managment, problem solving, communication and organization.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// projects 
export const projects = async (args: string[]): Promise<string> => {
  return `Here are some of my projects: 
  - Chess AI
  - Movie Reccomender
  - Sorting Visualizer
  - Sudoku Solver
  - WARG automated landing detection

  For more details, enter the first word of each project.`;

};

export const Sudoku = async (args: string[]): Promise<string> => {
  return `This was one of my earliest projects, so it is very visibly a novice project, but serves as a good 
contrast to the improvements I've made over time. The project required me to design its UI, create a 
valid board game every time it's generated, choose valid starting cells, and implement a backtracking algorithm
to solve the game.
  <div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${sudokus.src} width="180px"/>
  <img style="margin-right:2em;" src=${sudokusEnd.src} width="180px"/>
  </div>
  `;
};
export const sudoku = async (args: string[]): Promise<string> => {
  return `This was one of my earliest projects, so it is very visibly a novice project, but serves as a good 
contrast to the improvements I've made over time. The project required me to design its UI, create a 
valid board game every time it's generated, choose valid starting cells, and implement a backtracking algorithm
to solve the game.
  <div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${sudokus.src} width="180px"/>
  <img style="margin-right:2em;" src=${sudokusEnd.src} width="180px"/>
  </div>
  `;
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
export const Chess = async (args: string[]): Promise<string> => {
  return `Developped 2 chess AI, one which works algorithmically and the other with machine learning. I learned many new algorithms
  and came up with different creative solutions to get as close as possible to the best move. I also learned a lot
  about machine learning and greatly improved my OOP skills. More details are available in the readme of the project.
  <div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${chessStart.src} width="180px"/>
  <img style="margin-right:2em;" src=${chessMiddle.src} width="180px"/>
  </div>
  `
}
export const chess = async (args: string[]): Promise<string> => {
  return `Developped 2 chess AI in python, one which works algorithmically and the other with machine learning. I learned many new algorithms
  and came up with different creative solutions to get as close as possible to the best move. I also learned a lot
  about machine learning and greatly improved my OOP skills. More details are available in the readme of the project.
  <div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${chessStart.src} width="180px"/>
  <img style="margin-right:2em;" src=${chessMiddle.src} width="180px"/>
  </div>
  `
}
export const sorting = async (args: string[]): Promise<string> => {
  return `To practice skills learned in my computer science classes, I made a sorting visualizer in C as a mini-project. I applied
a fraction of the skills from class and learned to combine the visual interface with the backend in C.
<div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${quicksort1.src} width="180px"/>
  <img style="margin-right:2em;" src=${quicksort2.src} width="180px"/>
  <img style="margin-right:2em;" src=${sorts.src} width="180px"/>
  </div>
`
}
export const movie = async (args: string[]): Promise<string> => {
  return `Created an advanced movie reccomender website with NodeJS which scrapes through different movie reviewing platforms. I learned
a lot about using databases, web development and creating presentable designs. More details are available in the readme of the project.
<div style="display: inline-flex; align-items: center;">
  <img style="margin-right:2em;" src=${movi1.src} width="180px"/>
  <img style="margin-right:2em;" src=${movi2.src} width="180px"/>
  </div>
  `
}

export const classes = async (args: string[]): Promise<string> => {
  return `These are the classes I'm currently taking:
  - Calculus 3
  - Linear Algebra 2
  - CS (OOP | C++)
  - CS (Logic & Computation)
  - Physics `
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
