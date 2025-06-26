import Conta from "../types/Conta.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

function renderizarExtrato(): void {
    Conta.getGruposTransacoes();
}