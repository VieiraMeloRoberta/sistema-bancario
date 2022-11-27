import React from 'react';
import ResumoItens from '../ResumoItens';
import { ResumoFinanceiro } from './styles';

function Resumo({saldo, entrada, saida}) {
  return (
    <ResumoFinanceiro>
      <ResumoItens Valor={entrada} titulo="Entrada" color="b7d4d3" borderColor="0efb0e"/>
      <ResumoItens Valor={saida} titulo="Saída" color="b7d4d3" borderColor="e99d9d"/>
      <ResumoItens Valor={saldo} titulo="Saldo" color="b7d4d3" borderColor="6c63ff"/>
    </ResumoFinanceiro>
  );
}

export default Resumo;