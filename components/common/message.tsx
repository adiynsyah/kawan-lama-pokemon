import { notification } from "antd";

export const messageBoxOpen = (pokemonName: string, type: 'success' | 'info' | 'warning' | 'error') => {
  let message;
  let description;
  switch (type) {
    case 'success':
      message = 'Catched !';
      description = `Yeay, ${pokemonName} has been caught!`;
      break;

    case 'error':
      message = 'Remove Catched !';
      description = `Ops, ${pokemonName} has been removed!`;
      break;
    
    case 'warning':
      message = 'Warning!';
      description = `Sorry your pokemon in bag is full, you cannot catch pokemon`;
      break;
  
    default:
      break;
  }

  const configMsg = { message, description };

  notification[type]({
    ...configMsg,
    placement: 'topRight'
  });
};