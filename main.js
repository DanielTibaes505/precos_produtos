
let list_products = [
    {id:12342, product:'Stack Sadia 500g', precoUni:1.76},
    {id:12343, product:'Suco Tang 50g Laranja', precoUni:0.78},
    {id:12344, product:'Pipoca Yoki Temperada', precoUni:2.65},
    {id:12345, product:'Trident menta 20uni', precoUni:5.76},
    {id:12346, product:'Sabonete Lux Flores', precoUni:2.78},
    {id:12347, product:'Pasta Dental Sorriso Menta', precoUni:3.65}
  ];
  

function list(list_products){
  
  
  for(let dados of list_products){
    
    let nProdt = document.querySelector('#nProd');
    let idNProd = nProdt.value;
    
    let campo_quant = document.querySelector('#quant_prod');
    let quant_valor = campo_quant.value;
  
    
    
    let idProd = dados.id;
    let nameProd = dados.product;
    let preco= dados.precoUni;
    let calc = preco * quant_valor;
    
  
    let erro = 0;

    
    if(idNProd == idProd){
      document.querySelector('#input_produtos').value = nameProd;
      document.querySelector('#input_valor_uni').value = 'R$ ' + preco;
      
      if(quant_valor >= 15){
        
        let desconto = 0.10;
        let desc_valor = calc * desconto;
        let total = calc - desc_valor;
        
        document.querySelector('#input_display_result').value = 'O valor da compra deste produto é: R$ ' + total.toFixed(2);
          
      

      }else{
        
        document.querySelector('#input_display_result').value = 'O valor da compra deste produto é: R$ ' + calc.toFixed(2);
        
        
      }
      
    }else{
        erro++;
      
    }
    
    
  }
  
}

function btnAction(){

list(list_products);  
  
}
