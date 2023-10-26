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
  return `Welcome! Here are all the available commands:
  - about
  - github
  - linkedin
  - email
  - resume

`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hello, my name is ${config.name}. 
I am a student at Waterloo University currently in my first year, majoring in Computer Science.
Some of my hobbies are coding, drawing going to the gym, and rock climbing. I have some projects listed on github.
Some skills I have are time-managment, problem solving, communication and organization. To learn
more about me, type 'help'.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
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
