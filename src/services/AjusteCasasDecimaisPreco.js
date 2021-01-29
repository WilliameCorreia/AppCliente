export default function AjusteCasasDecimaisPreco(preco){

    if (preco.includes('.')) {
      // return preco;
      let valor = preco.split('.');
      if(valor[1].length<2){
        return `${valor[0]},${valor[1]}0`
      }else{
        return `${valor[0]},${valor[1]}`
      }

    } else if(preco.includes(',')){
      let valor = preco.split(',');
      if(valor[1].length<2){
        return `${valor[0]},${valor[1]}0`
      }else{
        return `${valor[0]},${valor[1]}`
      }
    }else{
      return `${preco},00`
    }

  }